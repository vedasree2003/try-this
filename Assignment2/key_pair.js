var crypto = require('crypto')
var fs = require('fs')

const { publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: 'top secret'
    }
  });

fs.writeFileSync('Assignment2/public_key.pem', publicKey);
fs.writeFileSync('Assignment2/private_key.pem', privateKey);