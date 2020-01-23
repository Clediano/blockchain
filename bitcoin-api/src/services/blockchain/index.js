const request = require("request-promise");

const { RPC_URL } = require('../../config/secret');

const defaultHeader = {
    url: RPC_URL,
    method: "POST",
    headers: { "content-type": "text/plain;" },
}

class Blockchain {
    getblock(hash) {
        var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${hash}"]}`;

        var options = {
            ...defaultHeader,
            body: dataString
        };

        return request(options);
    }
}

module.exports = new Blockchain();