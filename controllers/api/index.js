const router = require('express').Router();
const userRoute = require('./user-route');







router.use('/api/users', userRoute);










module.exports = router;
