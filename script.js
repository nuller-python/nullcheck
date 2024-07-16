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
    document.getElementById('credentials').style.display = 'block';
}

function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId).textContent;
    var tempInput = document.createElement('input');
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Copied: ' + copyText);
}
