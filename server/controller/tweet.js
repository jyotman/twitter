'use strict';

const Tweet = require('../model/Tweet');

exports.createTweet = async (req, res, next) => {
    try {
        const handle = req.headers.user || 'handle';
        const tweet = new Tweet({ handle, body: req.body.tweet });
        await tweet.save();
        res.json(tweet);
    } catch (err) {
        next(err);
    }
}

exports.getTweetsForUser = async (req, res, next) => {
    try {
        const handle = req.headers.user || 'handle';
        const tweets = await Tweet.find({ handle }).sort({_id: -1});
        res.json(tweets);
    } catch (err) {
        next(err);
    }
}