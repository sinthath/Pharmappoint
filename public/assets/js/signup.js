const { User } = require("../../../models");
 const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    var submit = document.getElementById("submit");
    submit.addEventListener("click", function signupFormHandler (event) {
    event.preventDefault();
    if (firstname && lastname && email && password ) {
      var userToPost = {
        firstName: firstname.value,
        lastName: lastname.value,
        email: email.value,
        password: password.value
      };

      firstname.value= "";
      lastname.value= "";
      email.value= "";
      password.value= "";
      postUserToDB(userToPost)
  } else {
    alert ("please fill out the form")
  }
})
    // const question1 = document.querySelector('#question1-signup').value.trim();
    // const question2 = document.querySelector('#question2-signup').value.trim();
    // const question3 = document.querySelector('#question3-signup').value.trim();
  
    function postUserToDB(user) {
      console.log(`STEP 1: POST: /api/iceCreams `);
      console.log(iceCream);
      fetch('/api/user', {
        method: 'post',
        body: JSON.stringify({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          password: user.password
        //   question1,
        //   question2,
        //   question3
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function() {
        document.location.replace('/public/index.html');
      }) 
    };