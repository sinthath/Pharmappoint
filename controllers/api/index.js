const router = require('express').Router();
const userRoute = require('./user-route');












router.use('/User', userRoute);


















module.exports = router;