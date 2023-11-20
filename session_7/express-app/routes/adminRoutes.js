const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.getAdminView);

router.get("/add-product", adminController.getAddProductView);

router.post("/product", adminController.createProduct);

module.exports = router;