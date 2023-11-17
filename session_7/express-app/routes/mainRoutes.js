const express = require("express");
const router = express.Router();

const adminRoutes = require("./adminRoutes")

router.get("/", (req, res)=>{
    console.log(adminRoutes.products);
    res.render("index");
})

router.get("/about", (req, res)=>{
    res.render("about")
})

module.exports = router;