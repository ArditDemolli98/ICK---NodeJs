const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const isAuth = require("../middlewares/is-auth");

router.get("/", adminController.getAdminView);

router.get("/add-product", isAuth, adminController.getAddProductView);

router.get("/my-products", isAuth, adminController.getMyProductsView);

router.post("/product", adminController.createProduct);

router.get("/edit-product/:id", isAuth, adminController.getEditProductView)

router.post("/edit-product", adminController.updateProduct);

router.post("/delete-product", adminController.deleteProduct);

module.exports = router;