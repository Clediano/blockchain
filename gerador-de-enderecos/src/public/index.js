const { privateKeyHex } = require('../private');
var CryptoJS = require('cryptojs').Crypto;
var ec = require("eccrypto");

const publicKeyBytes = ec.getPublic(Buffer.from(CryptoJS.util.hexToBytes(privateKeyHex)));

const publicKeyHex = CryptoJS.util.bytesToHex(publicKeyBytes);

const publicKeySHA256 = CryptoJS.SHA256(publicKeyBytes);

module.exports = {
    publicKeyBytes,
    publicKeyHex,
    publicKeySHA256
};