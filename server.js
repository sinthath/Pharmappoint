const path = require('path');
const express = require('express');
<<<<<<< HEAD
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

=======
const app = express();
//const passport = require('passport');
//const session = require('express-session');

const PORT = process.env.PORT || 3001;

const sequelize = require('./config/dbconnection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

<<<<<<< HEAD
// Passport
>>>>>>> 3804abe6e88db2843bc1b7022fb8245e29ea8ddf
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

<<<<<<< HEAD
app.use(session(sess));



=======
app.use(passport.initialize());
app.use(passport.session());
=======
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

// app.use(passport.initialize());
// app.use(passport.session());
>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0

// Models
//const models = require('./models');

// Express static assets
>>>>>>> 3804abe6e88db2843bc1b7022fb8245e29ea8ddf
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
app.use(require('./controllers/'));

=======
// Routes
app.use(require('./controllers/api'));

// Sync Database
>>>>>>> 3804abe6e88db2843bc1b7022fb8245e29ea8ddf
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
});