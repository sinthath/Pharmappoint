const path = require('path');
const express = require('express');
const app = express();
<<<<<<< HEAD
const passport = require('passport');
//const session = require('express-session');
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/dbconnection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
=======
//const passport = require('passport');
//const session = require('express-session');

const PORT = process.env.PORT || 3001;

const sequelize = require('./config/dbconnection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0
// // Passport
// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };
<<<<<<< HEAD
app.use(passport.initialize());
// app.use(passport.session());
// Models
//const models = require('./models');
=======

// app.use(passport.initialize());
// app.use(passport.session());

// Models
//const models = require('./models');

>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0
// Express static assets
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
// Routes
app.use(require('./controllers/api'));
=======

// Routes
app.use(require('./controllers/api'));

>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0
// Sync Database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});