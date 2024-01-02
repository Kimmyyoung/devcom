const express = require("express");
const router = express.Router();
const postContoller = require("../controllers/postController");

router.route('/').get(postContoller.getPostsController);
router.route('/:id').get(postContoller.getPostByIdController);
router.route('/create').post(postContoller.createPostController);

module.exports = router;