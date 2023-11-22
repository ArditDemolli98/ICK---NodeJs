const express = require("express");
const app = express();

const mainRoutes = require("./routes/mainRoutes");
const PORT = 3000;

app.set("view engine", "ejs");

app.use("/", mainRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})