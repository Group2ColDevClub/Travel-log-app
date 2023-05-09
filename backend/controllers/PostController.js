const Post = require("../models/postModal.js");

// get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e.message });
  }
};

// get specific post by id
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(204).send("Cannot find post with this id");
      return;
    }
    res.send(post);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e.message });
  }
};

// delete post
const deletePost = async (req, res) => {
  try {
    const result = await Post.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      res.status(204).send("No post found with this id");
    } else {
      res.status(200).send("Post deleted successfully");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e.message });
  }
};

// update post by id
const updatePostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(204).send("Cannot find post with this id");
      return;
    }

    const { title, location, author, likes, comments, date, photo } = req.body;

    if (title) {
      post.title = title;
    }

    if (location) {
      post.location = location;
    }

    if (author) {
      post.author = author;
    }

    if (likes) {
      post.likes = likes;
    }

    if (comments) {
      post.comments = comments;
    }

    if (date) {
      post.date = date;
    }

    if (photo) {
      post.photo = photo;
    }

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e.message });
  }
};

// create post
const createPost = async (req, res) => {
  const { title, location, author, likes, comments, date, photo } = req.body;
  try {
    const post = new Post({
      title,
      location,
      author,
      likes,
      comments,
      date,
      photo,
    });
    await post.save();
    res.status(201).json({ success: true, data: post });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  updatePostById,
};
