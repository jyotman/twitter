'use strict';

const Tweet = require('../model/Tweet');

exports.createTweet = async (req, res, next) => {
    try {
        const tweet = new Tweet({ handle: req.ip, body: req.body.tweet });
        await tweet.save();
        res.json({ success: true });
    } catch (err) {
        next(err);
    }
}

exports.getTweetsForUser = async (req, res, next) => {
    try {
        const tweets = await Tweet.find({ handle: req.ip });
        res.json(tweets);
    } catch (err) {
        next(err);
    }
}