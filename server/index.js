const express = require('express');
const server = express();
const indexController = require('./controllers');

server.get('/og', indexController.openGraph);

module.exports = server;