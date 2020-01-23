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

    async getRawTransaction(req, res) {

        return res.send({});
    }

}

module.exports = new BlockchainController();
