// Desplegable de noticias
let newsWrapper = document.getElementById('news-wrapper');
let toggleNewsBtn = document.getElementById('toggle-news');
let toggleNewsIcon = document.querySelector('#toggle-news i');

toggleNewsBtn.addEventListener('click', function() {
    newsWrapper.classList.toggle('open');
    // Cambiar el icono de flecha cuando se abre o cierra
    if (newsWrapper.classList.contains('open')) {
        toggleNewsIcon.classList.remove('fa-arrow-left');
        toggleNewsIcon.classList.add('fa-arrow-right');
    } else {
        toggleNewsIcon.classList.remove('fa-arrow-right');
        toggleNewsIcon.classList.add('fa-arrow-left');
    }
});

// Cambio de noticias cada 10 segundos
let newsBoxes = document.querySelectorAll('.news-box');
let currentNewsIndex = 0;

function rotateNews() {
    newsBoxes.forEach((box, index) => {
        box.style.display = (index === currentNewsIndex) ? 'block' : 'none';
    });
    currentNewsIndex = (currentNewsIndex + 1) % newsBoxes.length;
}

setInterval(rotateNews, 10000);
rotateNews();  // Iniciar con la primera noticia visible

// Mostrar una sección a la vez con animación de desplazamiento
let menuLinks = document.querySelectorAll('.menu-link');
let sections = document.querySelectorAll('.content-section');
let currentSection = document.querySelector('.content-section.active');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let targetSectionId = link.getAttribute('data-section');
        let targetSection = document.getElementById(targetSectionId);

        if (targetSection === currentSection) return; // Si ya está en la sección, no hacer nada

        // Determinar la dirección de la transición (derecha o izquierda)
        let direction = sections.length ? targetSectionId > currentSection.id : false;
        currentSection.classList.add(direction ? 'exit-right' : 'exit-left');

        setTimeout(() => {
            currentSection.classList.remove('active', 'exit-right', 'exit-left');
            currentSection = targetSection;
            currentSection.classList.add('active');
        }, 500); // Duración de la animación
    });
});