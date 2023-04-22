const express = require("express");
const router = express.Router();
import {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  updateTripById,
} from "../controllers/PostController";

// get all post
router.get("/", getAllPosts);

// get specific post
router.get("/:id", getPostById);

// create a post
router.post("/", createPost);

// delete a post
router.delete("/:id", deletePost);

// update post
router.put("/:id", updateTripById);

module.exports = router;
