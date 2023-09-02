const Router = require('express');
const router = new Router();
const commentController = require('../controller/comment.controller');

router.post('/comment', commentController.createComment);
router.get('/comment', commentController.getCommentsByPost);

module.exports = router;