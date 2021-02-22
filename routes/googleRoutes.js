const express = require('express');
const googleController = require('../controller/googleController');
const googlerouter = express.Router();

googlerouter.get('/', googleController.toGoogle);
googlerouter.get('/callback', googleController.fromGoogle);

module.exports = googlerouter;