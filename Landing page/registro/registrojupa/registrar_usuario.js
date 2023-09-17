window.onload = function() {

    const formulario = document.getElementById('formulario-registro');

    formulario.addEventListener('submit', (event) => {

        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = {
            'name': name,
            'email': email,
            'password': btoa(password)
        };

        localStorage.setItem('user', JSON.stringify(user));

        formulario.submit();

    });
}