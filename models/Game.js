const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  genres: {
    type: Array,
    required: true,
  },
  developers: {
    type: Array,
    required: true,
  },
  publishers: {
    type: Array,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  gameModes: {
    type: Array,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  esrb: {
    type: String,
    required: true,
    defaultValue: null,
  },
  coverPhoto: {
    type: String,
    required: true,
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
})

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
