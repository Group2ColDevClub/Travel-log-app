const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z]{3,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid location!`,
    },
  },
  author: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },

  comments: [commentSchema],

  date: {
    type: Date,
    require: true,
    default: () => Date.now(),
  },
  photo: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("postModel", postSchema);
