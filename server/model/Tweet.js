'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const Tweet = new Schema({
    handle: String,
    body: String,
    createdAt: {type: Date, default: new Date()}
});

// Tweet.index({ email: 1 }, { unique: true });

const TweetModel = mongoose.model('Tweet', Tweet);

module.exports = TweetModel;