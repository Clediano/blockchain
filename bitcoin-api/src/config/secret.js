const dotenv = require("dotenv");
dotenv.config();

const RPC_URL = process.env.RPC_URL;
const PORT = process.env.PORT;

module.exports = {
    RPC_URL,
    PORT
}