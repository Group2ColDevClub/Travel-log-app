const mongoose = require("mongoose");

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
