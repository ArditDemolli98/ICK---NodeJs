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

    getProductDetails: (req, res)=>{
        const prodId = req.params.id;
        Product.findById(prodId)
        .then(product => {
            res.render("product-details", { title: "Product details", product})
        })
    },

    getAboutView: (req, res)=>{
        res.render("about", {title: "About"})
    }

}
