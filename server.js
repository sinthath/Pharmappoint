const path = require('path');
const express = require('express');
const session = require('express-session');

const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/dbconnection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// var htmlRoutes = require("./controllers/html-routes");
// var apiRoutes = require("./controllers/api");
var routes = require('./controllers')

// Passport
const sess = {
  secret: 'shhh',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());


// Express static assets
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes
// app.use(require('./controllers/'));
app.use(routes);
// app.use(apiRoutes)
// Sync Database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});