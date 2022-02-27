const router = require('express').Router();
<<<<<<< HEAD
const userRoute = require('./user-route.js');
// const appointmentRoute = require('./appointment-route')
=======
const userRoute = require('./user-route');
>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0






<<<<<<< HEAD
router.use('/users', userRoute); 
// router.use('/appointment', appointmentRoute); 
=======

router.use('/api/users', userRoute);
>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0










module.exports = router;