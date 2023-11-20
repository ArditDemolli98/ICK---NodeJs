const adminController = require("./adminController");

module.exports = {
    getHomeView: (req, res)=>{
        const products = adminController.products;
        res.render("index", {title: "Home",
                            products: products});
    },

    getAboutView: (req, res)=>{
        res.render("about", {title: "About"})
    }

}
