const Product = require("../models/Product");

module.exports = {
    getHomeView: (req, res)=>{
        Product.find().sort({createdAt: -1})
        .then(result => {
            res.render("main/index", {title: "Home",
                            products: result,
                            isAuthenticated: req.session.loggedIn});
        })
        .catch(err => console.log(err))
    },

    getProductDetails: (req, res)=>{
        const prodId = req.params.id;
        Product.findById(prodId)
        .then(product => {
            res.render("main/product-details", { title: "Product details", product, isAuthenticated: req.session.loggedIn})
        })
    },

    getAboutView: (req, res)=>{
        res.render("main/about", {title: "About", isAuthenticated: req.session.loggedIn})
    }
}
