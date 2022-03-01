const { Appointment } = require('../models');

const appointmentdata = [
  {
    Appointments_time: 10,
    Appointments_date: 1,
    Appointments_type: 'Checkup',
    user_id: 1,
  },
  {
    Appointments_time: 11,
    Appointments_date: 5,
    Appointments_type: 'Follow up',
    user_id: 2,
  },
  {
    Appointments_time: 12,
    Appointments_date: 2,
    Appointments_type: 'X-ray',
    user_id: 1,
  },
  {
    Appointments_time: 1,
    Appointments_date: 3,
    Appointments_type: 'Testing',
    user_id: 2,
  },
  {
    Appointments_time: 3,
    Appointments_date: 4,
    Appointments_type: 'Well-check',
    user_id: 2,
  },
];

const seedPosts = () => Appointment.bulkCreate(appointmentdata);
module.exports = seedPosts;