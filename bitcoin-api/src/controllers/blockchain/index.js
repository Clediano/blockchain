const blockchain = require('../../services/blockchain');

class BlockchainController {
    getBlock(req, res) {
        blockchain.getblock(req.params.hash)
            .then(resp => {
                res.send(resp);
            })
            .catch(err => {
                res.send(err);
            })
    };

    getRawTransaction(req, res) {
        blockchain.getrawtransaction(req.params.id)
            .then(resp => {
                res.send(resp)
            })
            .catch(err => {
                res.send(err)
            })
    }

    decodeRawTransaction(req, res) {
        blockchain.decoderawtransaction(req.params.hex)
            .then(resp => {
                res.send(resp)
            })
            .catch(err => {
                res.send(err)
            })
    }

}

module.exports = new BlockchainController();
