document.addEventListener('DOMContentLoaded', function() {
    var joinUsLink = document.getElementById('join-us');
    var qrPopup = document.getElementById('qr-popup');
    var closeBtn = document.getElementsByClassName('close-btn')[0];

    joinUsLink.onclick = function() {
        qrPopup.style.display = "block";
        return false; // Prevent default link behavior
    }

    closeBtn.onclick = function() {
        qrPopup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == qrPopup) {
            qrPopup.style.display = "none";
        }
    }
});
