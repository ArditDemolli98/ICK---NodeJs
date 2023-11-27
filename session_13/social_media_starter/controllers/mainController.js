const main = require("../models/Main");

module.exports = {
    getHomeView: (req, res)=>{
        res.render("index", {
            logo: main.logo,
            myUser: main.myUser,
            stories: main.stories,
            posts: main.posts,
            invitations: main.invitations,
            requests: main.requests,
            contacts: main.contacts
        });
    }
}