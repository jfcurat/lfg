const db = require('../models');

async function get(req, res) {
  const { id } = req.params;
  try {
    const user = await db.User.findOne({ where: { id }, include: [db.Post] });
    res.status(200).json(user);
  } catch(err) {
    console.log(err);
  }
}

async function post(req, res) {
  const { userName, email } = req.body;
  try {
    const createUser = await db.User.create({ userName, email });
    res.status(200).json(createUser);
  } catch(err) {
    console.log(err);
  }
}

async function remove(req, res) {
  const { id } = req.params;
  try {
    const removeUser = await db.User.destroy({ where: { id } });
    res.status(200).json(removeUser);
  } catch(err) {
    console.log(err);
  }
}

async function patch(req, res) {
  const { id, userName, email } = req.params;
  try {
    const updateUser = await db.User.update({ userName, email }, {where: { id, }});
    res.status(200).json(updateUser);
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  get,
  post,
  remove,
  patch,
}
