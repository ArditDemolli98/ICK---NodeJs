const express = require("express");
const router = express.Router();
const path = require("path");

const adminRoutes = require("./adminRoutes")

router.get("/", (req, res)=>{
    console.log(adminRoutes.products);
    console.log(adminRoutes.firstName);
    res.render(path.join(__dirname, "..", "views","index.ejs"));
})

router.get("/about", (req, res)=>{
    res.write("<h1>This is the About Page</h1>")
})

module.exports = router;