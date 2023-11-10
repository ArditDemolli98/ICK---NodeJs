const express = require("express");
const app = express();

const PORT = 3000;

const players = {
    "lionel messi" : {
        "fullName" : "Lionel Andres Messi",
        "age" : "36"
    }, 
    "cristiano ronaldo" : {
        "fullName" : "Cristiano Ronaldo Dos Santos Aveiro",
        "age" : "39"
    },
    "unknown" : {
        "fullName" : "unknown",
        "age" : "unknown"
    }
}

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/about.html");
})

app.get("/api/:name", (req, res)=>{
    const shortName = req.params.name.toLowerCase();
    
    if(players[shortName]){
        res.json(players[shortName]);
    }else{
        res.json(players["unknown"])
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})