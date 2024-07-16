function openWarning() {
    document.getElementById('warning-popup').style.display = 'block';
}

function proceedToSocial() {
    document.getElementById('warning-popup').style.display = 'none';
    document.getElementById('social-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('social-popup').style.display = 'none';
}

function handleInstagram() {
    document.getElementById('social-popup').style.display = 'none';
    document.getElementById('instagram-popup').style.display = 'block';
}

function hasInstagram() {
    window.open('https://instagram.com/yourprofile', '_blank');
    document.getElementById('instagram-popup').style.display = 'none';
}

function noInstagram() {
    // Here, you would include the logic to log in the user using the specified account
    // This is a placeholder alert for demonstration purposes
    alert('You will be logged into an Instagram account and redirected to my profile.');
    document.getElementById('instagram-popup').style.display = 'none';
}
