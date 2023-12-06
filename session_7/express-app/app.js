const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require("connect-flash");
require("dotenv").config({path: "./config/.env"});

const adminRoutes = require("./routes/adminRoutes");
const mainRoutes = require("./routes/mainRoutes");
const authRoutes = require("./routes/authRoutes");

const store = new MongoDBStore({
    uri: process.env.DB_URI,
    collection: "sessions"
})

mongoose.connect(process.env.DB_URI)
.then(result =>{
    console.log("Connected to the database");
    app.listen(process.env.PORT, (error) =>{
        if(error) {
            console.log(error);
        }else{
            console.log(`Server is running on port ${process.env.PORT}`);
        }
    }); 
})
.catch(err => console.log(err));

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs");
app.use(session({
    secret: "nothing great ever came that easy",
    resave: false,
    saveUninitialized: false,
    store: store
}))
app.use(flash());

app.use("/", mainRoutes)

app.use("/", authRoutes);

app.use("/admin", adminRoutes);

app.use((req, res)=>{
    res.status(404).render("main/404", {title: "Page not found", isAuthenticated: req.loggedIn});
})