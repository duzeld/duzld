document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    alert('Terima kasih telah mendaftar dengan email: ' + email);
});
