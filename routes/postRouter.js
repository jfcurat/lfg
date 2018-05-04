const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.route('/api/post/:id').get(postController.get);
router.route('/api/post').post(postController.post);

module.exports = router;
