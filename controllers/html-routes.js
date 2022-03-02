const router = require("express").Router();

var path = require("path");

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return; //if person is logged in, redirect to home page.
  }
  res.render('login'); //if not, render the login page.
});

router.get('/signup', (req, res) => {
  res.render('signup');
}); //If you click the signup link it takes you to the handlebars signup page!

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});
module.exports = router;
