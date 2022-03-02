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

// const userdata = [
//   {
//     admin: false,
//     email: 'pdiddy@ciroc.com',
//     password: 'Sean123',
//     securityOne: 'badboyrecords',
//     securityTwo: 'password',
//     securityThree: 'basketball',
//     firstName: 'Mike',
//     lastName: 'Jordan',
//     gender: 'Male',
//     age: '55',
//     dob: '10/30/1970',
//     allergies: 'true',

//   },
//   {
//     admin: true,
//     email: 'fakeperson@ciroc.com',
//     password: 'mike123',
//     securityOne: 'youngmoney',
//     securityTwo: 'cashmoney',
//     securityThree: 'throwmoney',
//     firstName: 'lebron',
//     lastName: 'James',
//     gender: 'Male',
//     age: '38',
//     dob: '10/30/1983',
//     allergies: 'false',
//   }
// ];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;