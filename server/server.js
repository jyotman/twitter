'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    tweet = require('./route/tweet');

const app = express();

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/twitter';
mongoose.connect(mongoUri);

mongoose.connection.on('open', () => {
    console.log('Mongo Connected');
    startServer();
});
mongoose.connection.on('error', err => {
    console.error('Mongo Connection Error', err);
    process.exit(1);
});

function startServer() {
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(errorHandler);

    app.get('/', (req, res) => res.send('Twitter API'));

    app.use('/tweet', tweet);
    app.listen(process.env.PORT || 4000, () => console.log('Twitter server listening on port 4000!'));
}

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).send(err);
}