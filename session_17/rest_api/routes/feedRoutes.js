const express = require("express");
const router = express.Router();

const feedController = require("../controllers/feedController");

// GET/feed/posts
router.get("/posts", feedController.getPosts);

// POST/feed/createPost
router.post("/createPost", feedController.createPost);


// router.put()


// router.delete()

module.exports = router;