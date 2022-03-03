async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const question1 = document.querySelector('#question1-signup').value.trim();
    const question2 = document.querySelector('#question2-signup').value.trim();
    const question3 = document.querySelector('#question3-signup').value.trim();
  
    if (username && firstname && lastname && email && password && question1 && question2 && question3) {
      const response = await fetch('/api/user', {
        method: 'post',
        body: JSON.stringify({
          username,
          firstname,
          lastname,
          email,
          password
        //   question1,
        //   question2,
        //   question3
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/public/index.html');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);