'use strict';

const tweetController = require('../controller/tweet');
const router = require('express').Router();

router.post('/', tweetController.createTweet);

module.exports = router