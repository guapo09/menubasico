// JavaScript para manejar el envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Captura los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Valida los campos del formulario (esto es solo un ejemplo básico)
    if(name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Envía los datos del formulario (puedes hacer una llamada AJAX aquí)
    console.log('Formulario enviado:', { name, email, message });
    alert('Gracias por tu mensaje, ' + name + '. Nos pondremos en contacto contigo pronto.');

    // Limpia los campos del formulario
    document.getElementById('contactForm').reset();
});

// JavaScript para la navegación interactiva (añade clase activa)
const navLinks = document.querySelectorAll('nav .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
