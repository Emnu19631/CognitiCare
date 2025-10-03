document.addEventListener('DOMContentLoaded', function() {
    const panelLink = document.querySelector('a[href="../panel_cuidador/panel_cuidador.html"]');
    const correctPassword = "12345";

    panelLink.addEventListener('click', function(event) {
        event.preventDefault();

        const password = prompt("Por favor ingresa la contraseña:");

        if (password === correctPassword) {
            window.location.href = "../panel_cuidador/panel_cuidador.html";
        } else {
            alert("Contraseña incorrecta. Intenta de nuevo.");
        }
    });
});
