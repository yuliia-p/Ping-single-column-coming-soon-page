const inputEl = document.querySelector('#email');
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const textErrorEl = document.querySelector('.error-msg');
const button = document.querySelector('#submit');

button.addEventListener('click', e => {
  const email = inputEl.value;
  if (email === '' || email === undefined) {
    textErrorEl.innerText = 'Please provide us your email';
    inputEl.classList.add('error-input');
  } else if (!email.match(RegEmail)) {
    textErrorEl.innerText = 'Please provide a valid email';
    inputEl.classList.add('error-input');
  }
});
