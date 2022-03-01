const sequelize = require('../config/dbconnection');
const { User } = require('../models');

const userdata = [
  {
    firstname: 'Bruce',
    lastname: 'Wayne',
    email: 'bat@waynetech.com',
    username: 'Batman',
    password: 'wayne'
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