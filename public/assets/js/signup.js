    var submit = document.getElementById("signupButton");
    var userToPost
    submit.addEventListener("click", function signupFormHandler (event) {
    event.preventDefault();
    var firstname = document.querySelector('#firstname-signup').value.trim();
    var lastname = document.querySelector('#lastname-signup').value.trim();
    var email = document.querySelector('#email-signup').value.trim();
    var password = document.querySelector('#password-signup').value.trim();
    
    console.log("clicked")
   userToPost = {
      first: firstname,
      last: lastname,
      emailValue: email,
      passwordValue: password
}
console.log(firstname.value)
console.log(firstname)
console.log(userToPost.first)
    if (userToPost.first === undefined || userToPost.last === undefined || userToPost.emailValue === undefined || userToPost.passwordValue === undefined ) {
        alert ("please fill out the form")
        
      }
  console.log(userToPost)
  postUserToDB(userToPost)
});
    // const question1 = document.querySelector('#question1-signup').value.trim();
    // const question2 = document.querySelector('#question2-signup').value.trim();
    // const question3 = document.querySelector('#question3-signup').value.trim();
  
    function postUserToDB(user) {
      console.log(`STEP 1: POST: /api/users `);
      console.log(user);
      fetch('/api/users', {
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
      // .then(function() {
      //   document.location.replace('/index.html');
      // }) 
    };