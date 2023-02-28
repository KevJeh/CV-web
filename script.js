const header = document.querySelector('header');
let rotation = 0;
let intervalId;
let animationCompleted = false;

header.addEventListener('click', () => {
  if (!animationCompleted) {
    intervalId = setInterval(() => {
      header.style.transform = `rotate(${rotation}deg)`;
      rotation += 10;
      if (rotation >= 360) {
        clearInterval(intervalId);
        setTimeout(() => {
          header.style.transform = '';
          animationCompleted = true;
        }, 0); 
        rotation = 0;
      }
    }, 25);
  }
});

const contactLink = document.querySelector('footer a');
contactLink.addEventListener('mouseover', () => {
  alert('¡Gracias por visitar mi página! Si desea ponerse en contacto conmigo,envíeme un correo electrónico a kevjeh@ejemplo.com');
});



// Selecciona todas las secciones de la página
const sections = document.querySelectorAll('section');


// Selecciona todos los enlaces de la navegación
const links = document.querySelectorAll('nav a');



// Inicializa la sección activa como null
let activeSection = null;

// Agrega un evento clic a cada enlace
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // evita la acción predeterminada del enlace

    if (activeSection) {
      activeSection.style.fontSize = '';
    }
    

    const sectionId = link.getAttribute('href');

    const section = document.querySelector(sectionId);

    section.style.fontSize = '20px';

    activeSection = section;

    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const sobremiSection = document.querySelector('#sobre-mi');
const educacionSection = document.querySelector('#educacion');
const experienciaSection = document.querySelector('#experiencia');
const habilidadesSection = document.querySelector('#habilidades');
const proyectosSection = document.querySelector('#proyectos');

let seccionActual = null;

educacionSection.addEventListener('click', () => {
  if (seccionActual !== educacionSection) {
    if (seccionActual !== null) {
      seccionActual.style.fontSize = '16px';
    }
    educacionSection.style.fontSize = '20px';
    seccionActual = educacionSection;
  } else {
    educacionSection.style.fontSize = '16px';
    seccionActual = null;
  }
});


sobremiSection.addEventListener('click', () => {
  if (seccionActual !== sobremiSection) {
    if (seccionActual !== null) {
      seccionActual.style.fontSize = '16px';
    }
    sobremiSection.style.fontSize = '20px';
    seccionActual = sobremiSection;
  } else {
    sobremiSection.style.fontSize = '16px';
    seccionActual = null;
  }
});

experienciaSection.addEventListener('click', () => {
  if (seccionActual !== experienciaSection) {
    if (seccionActual !== null) {
      seccionActual.style.fontSize = '16px';
    }
    experienciaSection.style.fontSize = '20px';
    seccionActual = experienciaSection;
  } else {
    experienciaSection.style.fontSize = '16px';
    seccionActual = null;
  }
});

habilidadesSection.addEventListener('click', () => {
  if (seccionActual !== habilidadesSection) {
    if (seccionActual !== null) {
      seccionActual.style.fontSize = '16px';
    }
    habilidadesSection.style.fontSize = '20px';
    seccionActual = habilidadesSection;
  } else {
    habilidadesSection.style.fontSize = '16px';
    seccionActual = null;
  }
});

proyectosSection.addEventListener('click', () => {
  if (seccionActual !== proyectosSection) {
    if (seccionActual !== null) {
      seccionActual.style.fontSize = '16px';
    }
    proyectosSection.style.fontSize = '20px';
    seccionActual = proyectosSection;
  } else {
    proyectosSection.style.fontSize = '16px';
    seccionActual = null;
  }
});




