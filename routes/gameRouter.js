const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.route('/api/games/:name').get(gameController.get);
router.route('/api/game/:id').get(gameController.getOne);
router.route('/api/games').post(gameController.post);

module.exports = router;
