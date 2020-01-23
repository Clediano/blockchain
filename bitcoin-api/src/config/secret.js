const dotenv = require("dotenv");
dotenv.config();

const RPC_URL = process.env.RPC_URL;
const RPC_NETWORK = process.env.RPC_NETWORK;
const RPC_HOST = process.env.RPC_HOST;
const RPC_USERNAME = process.env.RPC_USERNAME;
const RPC_PASSWORD = process.env.RPC_PASSWORD;
const PORT = process.env.PORT;

module.exports = {
    RPC_URL,
    PORT,
    RPC_NETWORK,
    RPC_HOST,
    RPC_USERNAME,
    RPC_PASSWORD,
}