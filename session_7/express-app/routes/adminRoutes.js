const express = require("express");
const router = express.Router();

const path = require("path");

const products = [];

router.get("/", (req, res)=>{
    res.write("<h1>admin route</h1>")
})

router.get("/add-product", (req, res)=>{
    res.render("add-product", {title: "Add product"});
})

router.post("/product", (req, res)=>{
    console.log(req.body);
    products.push(req.body);
    res.redirect("/admin/add-product");
})

exports.routes = router;
exports.products = products;