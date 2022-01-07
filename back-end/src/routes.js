const express = require('express');
const ChatController = require('./controllers/ChatController');
const routes = express.Router();

routes.post('/sendMessage', ChatController.sendMessage);

module.exports = routes;