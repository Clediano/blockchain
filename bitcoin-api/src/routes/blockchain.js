const express = require('express');
const routes = express.Router();

const BlockchainController = require('../controllers/blockchain');

routes.get('/getblock/:hash', BlockchainController.getBlock);

module.exports = routes;
