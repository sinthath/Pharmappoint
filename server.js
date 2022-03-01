const path = require('path');
const express = require('express');

const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
//const passport = require('passport');
//const session = require('express-session');

const PORT = process.env.PORT || 3001;

const sequelize = require('./config/dbconnection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);


// Passport

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(session(sess));



(passport.initialize());
app.use(passport.session());

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


// Models
//const models = require('./models');

// Express static assets
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(require('./controllers/'));

// Routes
app.use(require('./controllers/api'));

// Sync Databasedf
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
});