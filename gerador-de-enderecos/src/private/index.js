const CryptoJS = require('cryptojs').Crypto;
const bs58 = require('bs58');

//Criar uma chave com 32 bytes de forma randômica.
const privateKeyHex = CryptoJS.util.bytesToHex(CryptoJS.util.randomBytes(32)).toUpperCase();

//Gerando nosso WIF, para podermos importar a carteira ao blockchain
var privateKeyAndVersion = "80" + privateKeyHex;

var firstSHA = CryptoJS.SHA256(CryptoJS.util.hexToBytes(privateKeyAndVersion));
var secondSHA = CryptoJS.SHA256(CryptoJS.util.hexToBytes(firstSHA));
var checksum = secondSHA.substr(0, 8).toUpperCase();

var keyWithChecksum = privateKeyAndVersion + checksum;

const privateKeyWIF = bs58.encode(Buffer.from(CryptoJS.util.hexToBytes(keyWithChecksum)));

module.exports = {
    privateKeyHex,
    privateKeyWIF
};