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

module.exports = {
    getHomeView: (req, res)=>{
        res.render("index");
    },

    getAboutView: (req, res)=>{
        res.render("about");
    },

    showPlayer: (req, res)=>{
        const shortName = req.params.name.toLowerCase();
        
        if(players[shortName]){
            res.json(players[shortName]);
        }else{
            res.json(players["unknown"])
        }
    }
}