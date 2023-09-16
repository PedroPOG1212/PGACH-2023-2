/*document.getElementById('editBtn').addEventListener('click', function() {
    alert('Editar historia de usuario no implementado aún.');
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registro realizado. Un perfil predeterminado para tu gato ha sido creado.');
});
*/
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const email = document.querySelector('#email').value;
  // Validate the input
  if (username === '' || password === '' || email === '') {
    alert(' Por favor, rellena todos los campos.');
    return;
  }
  // Create a new user account
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Redirect the user to the home page
        window.location.href = '/';
      } else {
        // Display an error message
        alert(data.message);
      }
    });
});