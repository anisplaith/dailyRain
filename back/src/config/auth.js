const crypto = require('crypto'); // encripta e descripta dados
const fs = require('fs'); // file system, manipula e cria arquivos
const path = require('path'); // caminho dos arquivos e pastas
const jsonwebtoken = require('jsonwebtoken'); // gera e verifica tokens

const PRIV_KEY = fs.readFileSync(path.join(__dirname, '..', '..', 'id_rsa_priv.pem'), 'utf-8');

// gera o salt e o hash -> (com base no password e salt)
const generatePassword = (password) => {
    const salt = crypto.randomBytes(32).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return {
        salt,
        hash,
    };
};

// checa a senha através da comparação do hash criado e o que foi passando como parâmetro
const checkPassword = (password, hash, salt) => {
    const hashFromReq = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hashFromReq === hash;
};

// gera a assinatura digital (token)
const generateJWT = (user) => {
    const sub = user.id;

    // payload: informação que depois te permita identificar qual usuário está fazendo requisição
    const payload = {
        sub,
        iat: Date.now(),
    };

    // jsonwebtoken.sign: cria uma assinatura com base no id e chave privada
    const jwt = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: '7d', algorithm: 'RS256' });
    return jwt;
};

// extrai o payload do token
const decodeJwt = (token) => {
    const payload = token.split('.')[1];
    const encodedPayload = Buffer.from(payload, 'base64');
    const decodedPayload = encodedPayload.toString('utf-8');
    return JSON.parse(decodedPayload);
};

const getToken = (req) => {
    const header = req.get('Authorization');
    if (!header) return error;
    return header.split(' ')[1];
};

module.exports = {
    checkPassword,
    generatePassword,
    generateJWT,
    decodeJwt,
    getToken,
};
