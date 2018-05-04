const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/api/users/:id').get(userController.get);
router.route('/api/users').post(userController.post);
router.route('/api/users/:id').delete(userController.remove);
router.route('/api/users').patch(userController.patch);

module.exports = router;
