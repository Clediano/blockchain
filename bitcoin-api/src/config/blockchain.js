const Client = require('bitcoin-core');

const {
    RPC_NETWORK,
    RPC_USERNAME,
    RPC_PASSWORD,
    RPC_HOST
} = require('../config/secret');

module.exports = new Client({
    network: RPC_NETWORK,
    username: RPC_USERNAME,
    password: RPC_PASSWORD,
    host: RPC_HOST
});