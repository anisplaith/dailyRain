const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

(() => {
    // gera tanto private quanto a public key
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'pkcs1', // Public-Key Cryptography Standards
            format: 'pem', // formato para arquivos de chaves públicas e privadas
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
        },
    });

    fs.writeFileSync(path.join(__dirname, '..', '..', 'id_rsa_pub.pem'), keyPair.publicKey);
    fs.writeFileSync(path.join(__dirname, '..', '..', 'id_rsa_priv.pem'), keyPair.privateKey);

    console.log('Chaves geradas com sucesso.');
})();
