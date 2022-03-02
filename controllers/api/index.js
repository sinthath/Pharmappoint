const router = require('express').Router();
const userRoute = require('./user-route');
const appointmentRoute = require('./appointment-route');

router.use('/users', userRoute);
router.use('/appointments', appointmentRoute);

module.exports = router;