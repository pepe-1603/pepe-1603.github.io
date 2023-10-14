const container = document.querySelector('.parrafos');
const heart = document.querySelector('.icon-animate');

container.addEventListener('mouseover', () => {
    heart.style.animationDuration = '8s'; // Cambia la duración de la animación al pasar el cursor
});

container.addEventListener('mouseout', () => {
    heart.style.animationDuration = '10s'; // Restaura la duración de la animación cuando se quita el cursor
});
