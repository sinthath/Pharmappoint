const router = require('express').Router();
<<<<<<< HEAD

const adminRoutes = require('./admin-routes.js');

router.use('/admin', adminRoutes);


module.exports = router;
=======
const userRoute = require('./user-route');












router.use('/user', userRoute);


















module.exports = router;
>>>>>>> 3804abe6e88db2843bc1b7022fb8245e29ea8ddf
