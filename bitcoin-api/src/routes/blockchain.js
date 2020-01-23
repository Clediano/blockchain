const express = require('express');
const routes = express.Router();

const BlockchainController = require('../controllers/blockchain');

routes.get('/getblock/:hash', BlockchainController.getBlock);
routes.get('/getrawtransaction/:id', BlockchainController.getRawTransaction);
routes.get('/decoderawtransaction/:hex', BlockchainController.decodeRawTransaction);

module.exports = routes;
