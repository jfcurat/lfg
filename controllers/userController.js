const db = require('../models');

async function get(req, res) {
  const { id } = req.params;
  try {
    const user = await db.User.findOne({ _id: id }).populate({
      path: 'following',
      model: 'User',
      populate: {
        path: 'posts',
        model: 'Post'
      }
    }).populate('posts');
    res.status(200).json(user);
  } catch(err) {
    console.log(err);
  }
}

async function post(req, res) {
  const { userName, email, fireBaseId } = req.body;
  try {
    const createUser = await db.User.create({ userName, email, fireBaseId });
    res.status(200).json(createUser);
  } catch(err) {
    console.log(err);
  }
}

async function remove(req, res) {
  const { id } = req.body;
  try {
    const removeUser = await db.User.remove({ _id: id });
    res.status(200).json(removeUser);
  } catch(err) {
    console.log(err);
  }
}

async function patch(req, res) {
  const { userId } = req.body;
  if(req.body.addFollowingId) {
    try {
      await db.User.findByIdAndUpdate({ _id: userId }, { $push: { following: req.body.addFollowingId } });
      await db.User.findByIdAndUpdate({ _id: req.body.addFollowingId}, { $push : { followers: userId } });
      res.status(200).send('ok');
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = {
  get,
  post,
  remove,
  patch,
}
