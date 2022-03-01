const sequelize = require('../config/dbconnection');
const { Time } = require('../models');


const userdata = [
    {
        time: '10'
    },
    {
        time: '11'
    },
    {
        time: '12'
    },
    {
        time: '1'
    },
    {
        time: '2'
    },
    {
        time: '3'
    },
  ];
  
  const seedsTime = () => Time.bulkCreate(userdata);
  
  module.exports = seedsTime;