
// get all appointments
const router = require('express').Router();
const { Appointment, Time, User } = require('../../models');

router.post('/', (req, res) => {
  const {
    Appointments_time,
    Appointments_date,
    Appointments_day,
    Appointments_type,
    user_id,
  } = req.body;
  const appointments = Appointment.create({
    Appointments_time: Appointments_time,
    Appointments_date: Appointments_date,
    Appointments_day: Appointments_day,
    Appointments_type: Appointments_type,
    user_id,
  })
    .then(appointments => res.json(appointments))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/', (req, res) => {
  //put route code here
  res.send('this Schedule route was successful (put)');
});


module.exports = router;