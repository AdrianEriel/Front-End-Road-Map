// Lógica para el consentimiento de cookies
document.addEventListener('DOMContentLoaded', function() {
    const cookieModal = document.getElementById('cookie-modal');
    const acceptBtn = document.getElementById('accept-cookies');
    // Verificar si ya se aceptó el consentimiento
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieModal.style.display = 'flex';
    }
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieModal.style.display = 'none';
        });
    }
});
