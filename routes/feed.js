const express = require('express');
const router = express.Router();
const feedContr = require('../controllers/feedControllers');
const isAuth = require('../middleware/isAuth');
const {body} = require('express-validator/check');

router.route('/posts')
    .get(isAuth, feedContr.getPosts)
    .post(isAuth,[
        body('title')
            .trim()
            .isLength({ min: 5 }),
        body('content')
            .trim()
            .isLength({ min: 5 })
    ], feedContr.createPost);

router.route('/post/:postId')
    .get(isAuth,feedContr.getPost)
    .put(isAuth,[
        body('title')
            .trim()
            .isLength({ min: 5 }),
        body('content')
            .trim()
            .isLength({ min: 5 })
    ],feedContr.updatePost)
    .delete(isAuth,feedContr.deletePost);


module.exports = router;