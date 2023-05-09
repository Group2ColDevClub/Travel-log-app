const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  updatePostById,
} = require("../controllers/PostController");

// get all posts
router.get("/", getAllPosts);

// get specific post
router.get("/:id", getPostById);

// create a post
router.post("/", createPost);

// delete a post
router.delete("/:id", deletePost);

// update post
router.put("/:id", updatePostById);

module.exports = router;
