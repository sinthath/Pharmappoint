const sequelize = require('../config/dbconnection');
const { User } = require('../models');


const userData = [{
  username: 'MJ23',
  password: '12345678',
  firstname: 'Michael',
  lastname: 'Jordan'

},
{
  username: 'VC15',
  password: '1234567',
  firstname: 'Vince',
  lastname: 'Carter'
},
{
  username: 'LBJ23',
  password: '123456',
  firstname: 'Leron',
  lastname: 'James'
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