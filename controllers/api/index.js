const router = require('express').Router();
const userRoute = require('./user-route.js');












router.use('/User', userRoute);


















module.exports = router;