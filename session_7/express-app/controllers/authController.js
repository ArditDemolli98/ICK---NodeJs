const User = require("../models/User");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");

module.exports = {
    getLogin: (req, res) => { 
        res.render("auth/login", {
            title: "Login",
            isAuthenticated: req.session.loggedIn,
            errorMessage: req.flash("error")
        });
    },

    getSignup: (req, res) =>{
        res.render("auth/signup", {
            title: "Sign up",
            isAuthenticated: req.session.loggedIn,
            errorMessage: req.flash("error"),
            oldInput: {
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            }
            })
    },

    postLogin: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        User.findOne({email: email})
        .then(user => {
            if(!user){
                req.flash("error", "Invalid username or password");
                res.redirect("/login");
            } else {
                bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if(!doMatch){
                        return res.redirect("/login");
                    }
                    req.session.loggedIn = true;
                    req.session.user = user;
                    res.redirect("/");
                })
                .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))     
    },

    postLogout: (req, res) =>{
        req.session.destroy(err => {
            console.log(err);
            res.redirect("/login");
        })
    },

    postSignup: (req, res) => {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(422).render("auth/signup", {
                title: "Sign up",
                isAuthenticated: req.session.loggedIn,
                errorMessage: errors.array()[0].msg,
                oldInput: {
                    username: username,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                }
                })
        } 
        User.findOne({email: email})
        .then(userDoc => {

            if(userDoc){
                req.flash("error", "User already exists")
                res.redirect("/signup");
            } else {
                bcrypt.hash(password, 10)
                .then(hashedPassword => {
                    const user = new User({
                    username: username,
                    email: email,
                    password: hashedPassword
                })
                return user.save()
                .then(result => {
                    res.redirect("/login");
                })
                }) 
            }
        })
        .catch(err => console.log(err))   
    }
}