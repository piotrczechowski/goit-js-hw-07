const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, password } = loginForm.elements;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('Fill all the fields.');
    return;
  }

  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(formData);

  loginForm.reset();
});