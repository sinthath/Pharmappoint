const router = require('express').Router();
const userRoute = require('./user-route.js');
// const appointmentRoute = require('./appointment-route')






router.use('/users', userRoute); 
// router.use('/appointment', appointmentRoute); 










module.exports = router;