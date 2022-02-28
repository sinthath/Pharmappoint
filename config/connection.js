const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

<<<<<<< HEAD:config/connection.js
module.exports = sequelize;
=======
    module.exports = sequelize; 
>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0:config/dbconnection.js
