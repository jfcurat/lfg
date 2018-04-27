const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.route('/api/games').get(gameController.get);
router.route('/api/games').post(gameController.post);
router.route('/api/game').get(gameController.getOne);

module.exports = router;
