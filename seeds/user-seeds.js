const sequelize = require('../config/dbconnection');
const { User } = require('../models');

const userdata = [
  {
    firstname: 'Sean',
    lastname: 'John',
    email: 'pdiddy@ciroc.com',
    username: 'Sean123',
    password: 'badboyrecords'
  },
  {
    firstname: 'Jay',
    lastname: 'Z',
    email: 'rocnation@nyc.com',
    username: 'Blueprint',
    password: 'Beyonce'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;