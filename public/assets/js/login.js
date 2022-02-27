const $signupForm = document.querySelector('#signup-form');

const handlesignupFormSubmit = event => {
    event.preventDefault();
  
    // get user data and organize it
    const username = $signupForm.querySelector('#username-signup').value;
    const email = $signupForm.querySelector('#email-signup').value;
    const password = $signupForm.querySelector('#password-signup').value;
    const firstname = $signupForm.querySelector('#firstname-signup').value;
    const lastname = $signupForm.querySelector('#lastname-signup').value;
    const gender = $signupForm.querySelector('#gender-signup').value;
    const dob = $signupForm.querySelector('#dob-signup').value;
    const allergies = $signupForm.querySelector('#allergies-signup').value;
    const question1 = $signupForm.querySelector('#question1-signup').value;
    const question2 = $signupForm.querySelector('#question2-signup').value;
    const question3 = $signupForm.querySelector('#question3-signup').value;
  
    const userObj = { username, email, password, firstname, lastname, gender, dob, allergies, question1, question2, question3 };
    console.log(userObj);
    fetch('api/zookeepers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(zookeeperObj)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        alert('Error: ' + response.statusText);
      })
      .then(postResponse => {
        console.log(postResponse);
        alert('Thank you for adding a zookeeper!');
      });
  };