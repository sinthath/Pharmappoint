const path = require("path");
const router = require('express').Router();
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get('/appointmentPage', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.sendFile((path.join(__dirname, "../public/views/appointment.html")))
});

module.exports= router;
// router.post('/api/login', (req, res) => {
//   User.findOne({
//     where: {
//       email: req.body.email
//     }
//   }).then(dbUserData => {
//     if (!dbUserData) {
//       res.status(400).json({ message: 'No user with that email address!' });
//       return;
//     }

//     const validPassword = dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: 'Incorrect password!' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = dbUserData.id;
//       req.session.email = dbUserData.email;
//       req.session.loggedIn = true;

//       res.json({ user: dbUserData, message: 'You are now logged in!' });
//     });
//   });
// });
// module.exports = router



// 