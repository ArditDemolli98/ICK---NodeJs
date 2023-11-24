const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.getHomeView);

router.get("/product-details/:id", mainController.getProductDetails)

// http://localhost:8000/product-details/65606e57ba43d73677b98087
router.get("/about", mainController.getAboutView);

module.exports = router;