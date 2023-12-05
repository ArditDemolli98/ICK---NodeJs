const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const {body} = require("express-validator");

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post("/login", authController.postLogin);

router.post("/logout", authController.postLogout);

router.post("/signup", [
body("email")
.isEmail()
.withMessage("Please write a proper email address!"),

body("password")
.isLength({min: 8, max: 16})
.withMessage("The password must contain 8 to 16 characters!"),

body("confirmPassword")
.custom((value, {req}) =>{
    if(req.body.confirmPassword !== req.body.password) {
        throw new Error("Passwords must match!");
    }
    return true;
}),

body("username")
.isAlphanumeric()
.withMessage("Username must only contain letters and numbers!")

]
, authController.postSignup);

module.exports = router;