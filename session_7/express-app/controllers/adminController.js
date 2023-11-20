const productsArray = [];

module.exports = {
    products: productsArray,

    getAdminView: (req, res)=>{
        res.write("<h1>admin route</h1>")
    },

    getAddProductView: (req, res)=>{
        res.render("add-product", {title: "Add product"});
    },

    createProduct: (req, res)=>{   
        productsArray.push(req.body);
        res.redirect("/admin/add-product");
    }
}