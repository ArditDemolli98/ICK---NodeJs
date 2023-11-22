const Product = require("../models/Product");

module.exports = {
    getHomeView: (req, res)=>{
        Product.find()
        .then(result => {
            console.log(result);
            res.render("index", {title: "Home",
                            products: result});
        })
        .catch(err => console.log(err))

        
    },

    getAboutView: (req, res)=>{
        res.render("about", {title: "About"})
    }

}
