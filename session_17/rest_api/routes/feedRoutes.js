const express = require("express");
const router = express.Router();

const feedController = require("../controllers/feedController");

// GET/feed/posts
router.get("/posts", feedController.getPosts);

// GET/feed/post/:id
router.get("/post/:id", feedController.getPostById);

// POST/feed/createPost
router.post("/createPost", feedController.createPost);

// PUT/feed/updatePost
router.put("/updatePost/:id", feedController.updatePost)


router.delete("/deletePost/:id", feedController.deletePost);

module.exports = router;