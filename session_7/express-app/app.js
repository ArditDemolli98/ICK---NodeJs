const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views","index.html"));
})

app.get("/add-product", (req, res)=>{
    res.sendFile(path.join(__dirname, "views","add-product.html"));
})

app.post("/product", (req, res)=>{
    console.log(req.body);
    res.redirect("/add-product")
})
app.listen(8000);