const db = require('../models');
const  igdb = require('igdb-api-node').default;
const client = igdb('d8192b6f11e1ebe4cc13b10745509c60');

async function get(req, res) {
  try {
    const games = await db.Game.find({ name: req.params.name });
    if(games.length === 0) {
      const results = await client.games({search: req.params.name, filters: {'popularity-gt': '5'}, fields: ['name', 'summary', 'genres', 'developers', 'publishers', 'release_dates', 'game_modes', 'rating', 'esrb', 'cover'], expand: ['developers', 'publishers', 'game_modes', 'genres']});  
      res.status(200).json(results.body);
    }
    res.status(200).json(games);
  } catch(err) {
    console.log(err);
  }
} 

async function getOne(req, res) {
  try {
    const game = await db.Game.findOne({ _id: req.params.id }).populate('posts');
    res.status(200).json(game);
  } catch(err) {
    console.log(err);
  }
}

async function post(req, res) {
  const { name, summary, genres, developers, publishers, releaseDate, gameModes, rating, esrb, coverPhoto } = req.body;
  try {
    const game = await db.Game.create({ name, summary, genres, developers, publishers, releaseDate, gameModes, rating, esrb, coverPhoto });
    res.status(200).json(game);
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  get,
  getOne,
  post,
}
