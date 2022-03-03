const router = require('express').Router();
const appointmentRoute = require('./api/appointment-route');
const userRoute = require('./api/user-route')
const homeRoutes = require('./html-routes/');

router.use('/homeRoutes', homeRoutes);
router.use('/api', userRoute);
router.use('/appointment', appointmentRoute)

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;