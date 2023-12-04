const Product = require("../models/Product")
module.exports = {

    getAdminView: (req, res)=>{
        res.write("<h1>admin route</h1>")
    },

    getAddProductView: (req, res)=>{
        res.render("admin/add-product", {title: "Add product", isAuthenticated: req.session.loggedIn});
    },

    getMyProductsView: (req, res) => {
        Product.find({userId: req.session.user._id}).sort({createdAt: -1})
        .then(result => {
            res.render("admin/my-products", {
                title: "My products",
                products: result,
                isAuthenticated: req.session.loggedIn
            });
        })
        .catch(err => console.log(err))
    },

    createProduct: (req, res)=>{   
        const productName = req.body.productName;
        const productPrice = req.body.productPrice;
        const productImageURL= req.body.productImageURL;
        const productCategory= req.body.productCategory;
        const productDescription= req.body.productDescription;

        //Object destructuring

        //const {productName, productPrice, productImageURL, productCategory, productDescription} = req.body;

        const product = new Product({
            name: productName,
            price: productPrice, 
            imageURL: productImageURL,
            category: productCategory,
            description: productDescription,
            userId: req.session.user._id,
            username: req.session.user.username
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
            res.render("admin/edit-product", {title: "Edit product", product, isAuthenticated: req.session.loggedIn})
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
            if(req.session.user._id.toString() == product.userId.toString()){
                product.name = prodName;
                product.price = prodPrice;
                product.category = prodCategory;
                product.description = prodDescription;
                product.imageURL = prodImageURL
                return product.save();
            }
        })
        .then(result => {
            res.redirect("/");
        })
        .catch(err => console.log(err))
    },

    deleteProduct: (req, res) =>{
        const prodId = req.body.productId;
        Product.findOneAndDelete({_id: prodId, userId: req.session.user._id})
        .then(result => {
            res.redirect("/")
        })
        .catch(err => console.log(err))
    }
}