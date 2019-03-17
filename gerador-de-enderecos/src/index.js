const CryptoJS = require('cryptojs').Crypto;
const bs58 = require('bs58');
const bitcoin = require('bitcoinjs-lib');
const { privateKeyHex, privateKeyWIF } = require('./private');
const { publicKeyBytes, publicKeyHex, publicKeySHA256 } = require('./public');

var versao = 0x00;
const hash160 = bitcoin.crypto.ripemd160(Buffer.from(CryptoJS.util.hexToBytes(publicKeySHA256)));

const hash160AndBytes = Array.prototype.slice.call(hash160, 0);
hash160AndBytes.unshift(versao);

const doubleSHA256 = CryptoJS.SHA256(CryptoJS.util.hexToBytes(CryptoJS.SHA256(hash160AndBytes)));

const checksum = doubleSHA256.substr(0,8);

const address = bs58.encode(Buffer.from(CryptoJS.util.hexToBytes("00" + CryptoJS.util.bytesToHex(hash160) + checksum)));

console.log(address);

module.exports = {
    privateKeyHex,
    privateKeyWIF,
    publicKeyBytes,
    publicKeyHex,
    address
}