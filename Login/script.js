document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    if (email && password) {
        alert(`Inicio de sesión exitoso!\nEmail: ${email}\nContraseña: ${password}\nRecordarme: ${remember}`);
        window.location.href = '../Pantalla_principal/pantalla_prin.html';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});