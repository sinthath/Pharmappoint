const router = require('express').Router();
const { Admin } = require('../../models');

// get all admin users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbAdminData => res.json(dbAdminData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;