const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/adminRoutes");
const mainRoutes = require("./routes/mainRoutes");
const authRoutes = require("./routes/authRoutes");
const User = require("./models/User");

const PORT = 8000;

mongoose.connect("mongodb+srv://arditdemolli98:ardos@cluster0.lpzt4xk.mongodb.net/")
.then(result =>{
    console.log("Connected to the database");
    app.listen(PORT, (error) =>{
        if(error) {
            console.log(error);
        }else{
            console.log(`Server is running on port ${PORT}`);
        }
    }); 
})
.catch(err => console.log(err));

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs");

app.use((req, res, next) => {
    User.findOne()
    .then(user =>{
        if(!user){
            const user = new User({
                username: "ardit",
                email: "ardos@ardos.com",
                password: "ardos"
            })
            user.save()
            .then(result => {
                req.user = user;
                next();
            })
        }
        req.user = user;
        next();
    })
})

app.use("/", mainRoutes)

app.use("/", authRoutes);

app.use("/admin", adminRoutes);

app.use((req, res)=>{
    res.status(404).render("404", {title: "Page not found"});
})