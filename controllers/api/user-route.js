const router = require('express').Router();
<<<<<<< HEAD
var db = require("../../models")
//routes will use /api/User/ {route}
=======
const { User } = require('../../models'); 


// get all users
router.get('/', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0

router.post('/', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

<<<<<<< HEAD
// router.put('/:id', (req, res) => {
//     User.update(req.body, {
//         individualHooks: true,
//         where: {
//           id: req.params.id
//         }
//       })
//         .then(dbUserData => {
//           if (!dbUserData[0]) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//           }
//           res.json(dbUserData);
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//         });
//     });

// //Maybe later
// router.delete('/:id', (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbUserData => {
//       if (!dbUserData) {
//         res.status(404).json({ message: 'No User found with this id!' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   res.send("this User route was successful (delete)");
// });
=======
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
          id: req.params.id
        }
      })
        .then(dbUserData => {
          if (!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

    router.delete('/:id', (req, res) => {
        User.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
      });
>>>>>>> 2495b2a1a41ab7fb1fbdc54c3f0009330eef08b0

module.exports = router;