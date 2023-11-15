const express = require("express");
const router = express.Router();

const path = require("path");

router.get("/", (req, res)=>{
    res.write("<h1>admin route</h1>")
})

router.get("/add-product", (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "views","add-product.html"));
})

router.post("/product", (req, res)=>{
    console.log(req.body);
    res.redirect("/admin/add-product")
})

module.exports = router;