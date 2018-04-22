const db = require('../models');

async function get(req, res) {
  if (req.params.id) {
    try {
      const games = await db.Game.findOne({ id: req.params.id, include: [db.Post] });
      res.status(200).json(games);
    } catch(err) {
      console.log(err);
    }
  } else {
    try {
      const games = await db.Games.findAll({});
      res.status(200).json(games);
    } catch(err) {
      console.log(err);
    }
  }
} 

async function post(req, res) {
  const { name, publisher, releaseDate, gameMode, rating, esrb } = req.body;
  try {
    const game = await db.Games.create({ name, publisher, releaseDate, gameMode, rating, esrb });
    res.status(200).send('Ok');
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  get,
  post,
}
