'use strict';

const Tweet = require('../model/Tweet');

exports.createTweet = async (req, res, next) => {
    try {
        const tweet = new Tweet({handle: req.headers.user, body: req.body.tweet});
        await tweet.save();
        res.end();
    } catch (err) {
        next(err);
    }
}