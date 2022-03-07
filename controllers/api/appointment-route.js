const router = require('express').Router();
const { Appointment, Time, User } = require('../../models');
// get all appointments
router.get('/', (req, res) => {
  Appointment.findAll({
     attributes: ['Appointments_date'],
     include: [
        {
           model: User,
           attributes: ['email'],
        },
        {
          model: Time,
          attributes: ['time']
        },
     ],
    })
    .then(dbAppointmentData => res.json(dbAppointmentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get an appointment
router.get('/:id', (req, res) => {
  Appointment.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['Appointments_time', 'Appointments_date', 'Appointments_type'],
      include: [
        {
           model: User,
           attributes: ['Username'],
        },
        {
          model: Time,
          attributes: ['time']
        },
     ],
    })
    .then(dbAppointmentData => {
      if (!dbAppointmentData) {
        res.status(404).json({ message: 'No Appointments were found' });
        return;
      }
      res.json(dbAppointmentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//Create an Appointment
router.post('/create', (req, res) => {
  console.log("here")
  console.log(req.body)
  Appointment.create({
    Appointments_time: req.body.Appointments_time,
    Appointments_date: req.body.Appointments_date,
    Appointments_type: req.body.Appointments_type,
    user_id: req.session.user_id
  })
  .then(dbAppointmentData => {
      console.log("saved the appt in the db")
      console.log(req.session)
      console.log(dbAppointmentData)
      req.session.save(() => {
        req.session.user_id = dbAppointmentData.user_id;
        res.json(dbAppointmentData);

      })
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
// Update an Appointment
router.put('/:id', (req, res) => {
  Appointment.update(
      {
        Appointments_time: req.body.Appointments_time,
        Appointments_date: req.body.Appointments_date,
        Appointments_type: req.body.Appointments_type,
      },
      {
          where: {
              id: req.params.id
          }
      }
  )
  .then(dbAppointmentData => {
      if(!dbAppointmentData) {
          res.status(404).json({ message: 'No Appointment was found'});
          return;
  }
  res.json(dbAppointmentData);
  })  
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});
// Delete an Appointment
router.delete('/:id', (req, res) => {
  Appointment.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(dbAppointmentData => {
      if(!dbAppointmentData) {
          res.status(404).json({ message: 'No Appointment was found'});
          return;
  }
  res.json(dbAppointmentData);
  })  
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});
module.exports = router;