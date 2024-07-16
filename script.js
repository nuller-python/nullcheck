function openWarning() {
    document.getElementById('warning-popup').style.display = 'block';
}

function proceedToSocial() {
    document.getElementById('warning-popup').style.display = 'none';
    document.getElementById('social-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('warning-popup').style.display = 'none';
    document.getElementById('social-popup').style.display = 'none';
    document.getElementById('instagram-popup').style.display = 'none';
    document.getElementById('no-instagram-popup').style.display = 'none';
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
    document.getElementById('instagram-popup').style.display = 'none';
    document.getElementById('no-instagram-popup').style.display = 'block';
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
