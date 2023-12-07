const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feedRoutes");

app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.use("/feed", feedRoutes);

app.listen(8080);