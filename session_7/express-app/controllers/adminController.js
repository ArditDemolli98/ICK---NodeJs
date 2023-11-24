const Product=require("../models/Product")
module.exports = {

    getAdminView: (req, res)=>{
        res.write("<h1>admin route</h1>")
    },

    getAddProductView: (req, res)=>{
        res.render("add-product", {title: "Add product"});
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
            description: productDescription
        })
        product.save()
        .then(result =>{
            console.log(result);
            res.redirect("/admin/add-product");
        })
        .catch(err => console.log(err))
       
        
    }
}