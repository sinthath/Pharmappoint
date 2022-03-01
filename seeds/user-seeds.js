const sequelize = require('../config/dbconnection');
const { User } = require('../models');

const userdata = [
  {
    firstname: 'Bell',
    lastname: 'Canada',
    email: 'bell@canada.com',
    username: 'Belltalks',
    password: 'telus'
  },
  {
    firstname: 'Roger',
    lastname: 'Ted',
    email: 'tedroger@nroger.com',
    username: 'roger123',
    password: 'ted123'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;