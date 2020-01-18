if (process.env.NODE_ENV === 'production') {
  console.log('__Production Mode');
}

if (process.env.NODE_ENV === 'development') {
  console.log('__Development Mode');
}

const body = document.querySelector('body');
const button = document.createElement('button');

button.addEventListener('click', () => {
  fetch('/api/getUsername')
    .then(res => res.json())
    .then(user => console.log('user', user));
});
button.innerText = 'get User data';

body.appendChild(button);
