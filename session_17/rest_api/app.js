const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose=require ("mongoose")
const feedRoutes = require("./routes/feedRoutes");

app.use(bodyParser.json());
mongoose.connect("mongodb+srv://arditdemolli98:ardos@cluster0.lpzt4xk.mongodb.net/")
.then(result =>{
    console.log("Connected to the database");
    app.listen(8000, (error) =>{
        if(error) {
            console.log(error);
        }else{
            console.log(`Server is running on port ${8000}`);
        }
    }); 
})
.catch(err => console.log(err));
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.use("/feed", feedRoutes);

app.listen(8080);