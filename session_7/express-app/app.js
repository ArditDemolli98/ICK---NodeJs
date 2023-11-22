const express = require("express");
const app = express();
const mongoose = require("mongoose");

const adminRoutes = require("./routes/adminRoutes");
const mainRoutes = require("./routes/mainRoutes");

const path = require("path");
const bodyParser = require("body-parser");

const PORT = 8000;

mongoose.connect("Stringu qe e merrni nga MongoDB atlas le te vendoset ketu")
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

app.use("/", mainRoutes)

app.use("/admin", adminRoutes);

app.use((req, res)=>{
    res.status(404).render("404", {title: "Page not found"});
})
