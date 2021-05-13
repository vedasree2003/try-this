var crypto = require('crypto')
var fs = require('fs')
var read = require('readline-sync')

/*Read the message(original message which has to be signed), path of private key,
passphrase of the encrypte private key from the user*/

let msg = read.question('Enter the message to be signed:\n')
let privkey = read.question('Enter the path of the file containing private key file:\n')
let pass = read.question('Enter the passphrase for the encrypted private key:\n')

/*Read the contents of file of private key*/
privkey = fs.readFileSync(privkey) 

/**Sign the message */
let sign = crypto.sign(crypto.RSASSA_PKCS1_SHA256, Buffer.from(msg, 'utf-8'), {
    key: privkey.toString(),
    passphrase: pass,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING 
})

/**Store the signed/encrypted message in a file named  "encrypted.txt" */
fs.writeFileSync('Assignment2/encrypted.txt', sign.toString('hex'))
