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
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  gameId: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
  },
  timeCreated: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
