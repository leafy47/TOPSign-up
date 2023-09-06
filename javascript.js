// let firstPass = document.querySelector('#password');
// let secondPass = document.querySelector('#confirmpass');

// function passCheck(first, second) {
//     if (first.value == second.value) {
//         first.className = 'correct';
//         second.className = 'correct';
//     }
//     else {
//         first.className = 'error';
//         second.className = 'error';
//     }
// }

// firstPass.addEventListener('input', passCheck(firstPass, secondPass));

const password1 = document.getElementById('password');
const password2 = document.getElementById('confirmpass');
let warning = document.querySelector('.nowarning');
const button1 = document.getElementById('thebutton');

// Add an event listener to password2 to check for match
password2.addEventListener('input', function() {
  if (password1.value === password2.value) {
    password1.className = 'correct';
    password2.className = 'correct';
    warning.className = 'nowarning';
    button1.removeAttribute('disabled');
  } else {
    password1.className = 'error';
    password2.className = 'error';
    warning.className = 'warning';
    button1.setAttribute('disabled', '');
  }
});

password1.addEventListener('input', function() {
  if (password1.value === password2.value) {
    password1.className = 'correct';
    password2.className = 'correct';
    warning.className = 'nowarning';
    button1.removeAttribute('disabled');
  } else {
    password1.className = 'error';
    password2.className = 'error';
    warning.className = 'warning';
    button1.setAttribute('disabled', '');
  }
});

