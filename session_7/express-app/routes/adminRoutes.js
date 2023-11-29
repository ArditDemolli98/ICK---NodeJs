const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.getAdminView);

router.get("/add-product", adminController.getAddProductView);

router.post("/product", adminController.createProduct);

router.get("/edit-product/:id", adminController.getEditProductView)

router.post("/edit-product", adminController.updateProduct);

router.post("/delete-product", adminController.deleteProduct);

module.exports = router;