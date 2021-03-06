const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  platforms: {
    type: Array,
  },
  fireBaseId: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
  },
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
})

const User = mongoose.model('User', userSchema);

module.exports = User;
