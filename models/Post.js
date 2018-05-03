const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  post: {
    type: String,
    required: true,
  },
  amountOfPlayersNeeded: {
    type: Number,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
  },
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
