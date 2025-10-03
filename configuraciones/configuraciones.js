document.addEventListener('DOMContentLoaded', function() {
    const editProfileButton = document.getElementById('editProfileButton');
    const editProfileForm = document.getElementById('editProfileForm');
    const saveProfileButton = document.getElementById('saveProfileButton');
    const cancelEditButton = document.getElementById('cancelEditButton');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profilePic = document.getElementById('profilePic');


    editProfileButton.addEventListener('click', function() {
        editProfileForm.classList.remove('hidden');

        document.getElementById('editName').value = profileName.textContent;
        document.getElementById('editEmail').value = profileEmail.textContent;
    });


    saveProfileButton.addEventListener('click', function() {
        const newName = document.getElementById('editName').value;
        const newEmail = document.getElementById('editEmail').value;
        const newProfilePic = document.getElementById('editProfilePic').files[0];


        profileName.textContent = newName;
        profileEmail.textContent = newEmail;

        if (newProfilePic) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePic.src = e.target.result;
            };
            reader.readAsDataURL(newProfilePic);
        }

        editProfileForm.classList.add('hidden');
    });

    cancelEditButton.addEventListener('click', function() {
        editProfileForm.classList.add('hidden');
    });
});
