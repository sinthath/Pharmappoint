const router = require('express').Router();
const apiRoutes = require('./api/');

<<<<<<< HEAD
router.use('/api', apiRoutes)
=======

router.use('/api', apiRoutes); 

router.use((req, res) => {
    res.status(404).end();
  });

>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0
module.exports = router;