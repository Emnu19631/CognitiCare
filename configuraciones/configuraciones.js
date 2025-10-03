document.addEventListener('DOMContentLoaded', function() {
    const editProfileButton = document.getElementById('editProfileButton');
    const editProfileForm = document.getElementById('editProfileForm');
    const saveProfileButton = document.getElementById('saveProfileButton');
    const cancelEditButton = document.getElementById('cancelEditButton');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profilePic = document.getElementById('profilePic');

    // Mostrar formulario de edición
    editProfileButton.addEventListener('click', function() {
        editProfileForm.classList.remove('hidden');
        // Rellenar el formulario con los datos actuales
        document.getElementById('editName').value = profileName.textContent;
        document.getElementById('editEmail').value = profileEmail.textContent;
    });

    // Guardar los cambios en el perfil
    saveProfileButton.addEventListener('click', function() {
        const newName = document.getElementById('editName').value;
        const newEmail = document.getElementById('editEmail').value;
        const newProfilePic = document.getElementById('editProfilePic').files[0];

        // Actualizar los datos del perfil (simulación, en un sistema real lo guardarías en un backend)
        profileName.textContent = newName;
        profileEmail.textContent = newEmail;

        // Actualizar la imagen del perfil si se seleccionó una nueva
        if (newProfilePic) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePic.src = e.target.result;
            };
            reader.readAsDataURL(newProfilePic);
        }

        // Ocultar el formulario de edición después de guardar
        editProfileForm.classList.add('hidden');
    });

    // Cancelar la edición
    cancelEditButton.addEventListener('click', function() {
        editProfileForm.classList.add('hidden');
    });
});
