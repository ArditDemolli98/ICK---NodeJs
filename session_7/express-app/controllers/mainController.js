const adminRoutes = require("../routes/adminRoutes");
  
module.exports = {
    getHomeView: (req, res)=>{
        const products = adminRoutes.products;
        res.render("index", {title: "Home",
                            products: products});
    },
     
}
