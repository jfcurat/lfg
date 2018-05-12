const db = require("../models");

async function get(req, res) {
  const { id } = req.params;
  try {
    const user = await db.User.findOne({ _id: id })
      .populate({
        path: "following",
        model: "User",
        populate: {
          path: "posts",
          model: "Post",
          populate: {
            path: "gameId",
            model: "Game"
          }
        }
      })
      .populate({
        path: "posts",
        model: "Post",
        populate: {
          path: "gameId",
          model: "Game"
        }
      })
      .populate({
        path: "followers",
        model: "User",
        populate: {
          path: "posts",
          model: "Post",
          populate: {
            path: "gameId",
            model: "Game"
          }
        }
      });
    res.status(200).json(user);
  } catch (err) {
    throw err;
  }
}

async function getSignIn(req, res) {
  const { fireBaseId } = req.params;
  try {
    const user = await db.User.findOne({ fireBaseId })
      .populate({
        path: "following",
        model: "User",
        populate: {
          path: "posts",
          model: "Post",
          populate: {
            path: "gameId",
            model: "Game"
          }
        }
      })
      .populate({
        path: "posts",
        model: "Post",
        populate: {
          path: "gameId",
          model: "Game"
        }
      })
      .populate({
        path: "followers",
        model: "User",
        populate: {
          path: "posts",
          model: "Post",
          populate: {
            path: "gameId",
            model: "Game"
          }
        }
      });
    res.status(200).json(user);
  } catch (err) {
    throw err;
  }
}

async function post(req, res) {
  const { userName, email, fireBaseId } = req.body;
  try {
    const createUser = await db.User.create({ userName, email, fireBaseId });
    res.status(200).json(createUser);
  } catch (err) {
    throw err;
  }
}

async function remove(req, res) {
  const { id } = req.body;
  try {
    const removeUser = await db.User.remove({ _id: id });
    res.status(200).json(removeUser);
  } catch (err) {
    throw err;
  }
}

async function patch(req, res) {
  const { userId } = req.body;
  if (req.body.addFollowingId) {
    try {
      await db.User.findByIdAndUpdate(
        { _id: userId },
        { $push: { following: req.body.addFollowingId } }
      );
      await db.User.findByIdAndUpdate(
        { _id: req.body.addFollowingId },
        { $push: { followers: userId } }
      );
      res.status(200).send("ok");
    } catch (err) {
      throw err;
    }
  } else {
    const { fireBaseId, profilePhoto, platforms, userName } = req.body;
    try {
      await db.User.findOneAndUpdate(
        { fireBaseId },
        { profilePhoto, platforms, userName }
      );
      res.status(200).send("ok");
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  get,
  post,
  getSignIn,
  remove,
  patch
};
