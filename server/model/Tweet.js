'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const Tweet = new Schema({
    handle: String,
    body: String,
    createdAt: {type: Date, default: Date.now}
});

const TweetModel = mongoose.model('Tweet', Tweet);

module.exports = TweetModel;