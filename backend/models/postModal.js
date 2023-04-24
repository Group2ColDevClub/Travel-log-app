const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
    require: true,
  },
  comments: [
    {
      description: String,
      userName: String,
    },
  ],
  date: {
    type: Date,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("postModal", postSchema);
