
/* ----- mostrar btn Top */
const btnTopHidden = document.getElementById('btn-hidden');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.pageYOffset > 20) {
        btnTopHidden.style.display = "block";
    } else {
        btnTopHidden.style.display = "none";
        console.log('The btn you would not see it.');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    btnTopHidden.addEventListener('click', function(){
        console.log('The btn you would see it.');
        window.scrollTo({top: 0, behavior: 'smooth'}); // Para todos los navegadores
    });
});