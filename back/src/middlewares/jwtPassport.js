const fs = require('fs');
const path = require('path');
const User = require('../models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const pathToKey = path.join(__dirname, '../../', 'id_rsa_pub.pem'); // pega o caminho das keys
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8'); // pega a chave publica

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
};

module.exports = (passport) => {
  passport.use(new JwtStrategy(options, async (payload, done) => {
    await User.findByPk(payload.sub).then((User) => {
      if (User) {
        return done(null, User);
      }
      return done(null, false);
    }).catch((err) => done(err, null));
  }));
};
