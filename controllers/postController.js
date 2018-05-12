const db = require('../models');

async function get(req, res) {
  try {
    const post = await db.Post.findOne({ _id: req.params.id });
    res.status(200).send('ok');
  } catch(err) {
    throw err;
  }
} 

async function post(req, res) {
  const { post, amountOfPlayersNeeded, platform, userId, gameId, timeCreated } = req.body;
  try {
    const createPost = await db.Post.create({ post, amountOfPlayersNeeded, userId, gameId, platform, timeCreated });
    await db.User.findByIdAndUpdate(userId, { $push: { posts: createPost._id } });
    await db.Game.findByIdAndUpdate(gameId, { $push: { posts: createPost._id } });
    res.status(200).json(post);
  } catch(err) {
    throw err;
  }
}

module.exports = {
  get,
  post
}
