const db = require('../models');

async function get(req, res) {
  try {
    const post = await db.Post.findOne({ _id: req.params.id });
    res.status(200).send('ok');
  } catch(err) {
    console.log(err);
  }
} 

async function post(req, res) {
  const { post, amountOfPlayersNeeded, platform, userId, gameId } = req.body;
  try {
    const createPost = await db.Post.create({ post, amountOfPlayersNeeded, author, game });
    await db.User.findByIdAndUpdate(author, { $push: { posts: createPost._id } });
    await db.Game.findByIdAndUpdate(game, { $push: { posts: createPost._id } });
    
    res.status(200).json(post);
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  get,
  post
}
