const express = require('express');
require('./src/config/dotenv')();
require('./src/config/sequelize');
require('./src/config/auth');

const app = express();
const port = process.env.PORT;
const cors = require('cors');
const passport = require('passport');
require('./src/middlewares/jwtPassport.js')(passport);
const routes = require('./src/routes/routes');

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
  res.send('DailyRain is up');
});

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
