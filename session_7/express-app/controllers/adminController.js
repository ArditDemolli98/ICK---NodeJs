const Product = require("../models/Product")
module.exports = {

    getAdminView: (req, res)=>{
        res.write("<h1>admin route</h1>")
    },

    getAddProductView: (req, res)=>{
        res.render("add-product", {title: "Add product", isAuthenticated: req.session.loggedIn});
    },

    createProduct: (req, res)=>{   
        const productName = req.body.productName;
        const productPrice = req.body.productPrice;
        const productImageURL= req.body.productImageURL;
        const productCategory= req.body.productCategory;
        const productDescription= req.body.productDescription;

        const product = new Product({
            name: productName,
            price: productPrice, 
            imageURL: productImageURL,
            category: productCategory,
            description: productDescription,
            userId: req.session.user._id
        })
        product.save()
        .then(result =>{
            console.log(result);
            res.redirect("/admin/add-product");
        })
        .catch(err => console.log(err)) 
    },

    getEditProductView: (req, res) =>{
        const prodId = req.params.id;
        
        Product.findById(prodId)
        .then(product =>{
            res.render("edit-product", {title: "Edit product", product, isAuthenticated: req.session.loggedIn})
        })
        .catch(err => console.log(err))
    },

    updateProduct: (req, res) => {
        const prodId = req.body.productId
        const prodName = req.body.productName;
        const prodPrice = req.body.productPrice;
        const prodCategory = req.body.productCategory;
        const prodDescription = req.body.productDescription;
        const prodImageURL = req.body.productImageURL;
        Product.findById(prodId)
        .then(product => {
            product.name = prodName;
            product.price = prodPrice;
            product.category = prodCategory;
            product.description = prodDescription;
            product.imageURL = prodImageURL
            return product.save();
        })
        .then(result => {
            res.redirect("/");
        })
        .catch(err => console.log(err))
    },

    deleteProduct: (req, res) =>{
        const prodId = req.body.productId;
        Product.findByIdAndDelete(prodId)
        .then(result => {
            res.redirect("/")
        })
        .catch(err => console.log(err))
    }

}