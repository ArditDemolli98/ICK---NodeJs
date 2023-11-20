const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.getHomeView);

router.get("/about", (req, res)=>{
    res.render("about", {title: "About"})
})

module.exports = router;