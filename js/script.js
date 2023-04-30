const contactLink = document.getElementById('correo__contacto');
contactLink.addEventListener('mouseover', () => {
  alert('¡Gracias por visitar mi página! Si desea ponerse en contacto conmigo, envíeme un correo electrónico a kevjeh@ejemplo.com');
});

const scrollTopBtn = document.getElementById('scroll-top-btn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollTopBtn.classList.add('scroll-top-btn-show');
  } else {
    scrollTopBtn.classList.remove('scroll-top-btn-show');
  }
});

const form = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");

form.addEventListener("submit", function(event) {
  // Validación del campo Nombre
  if (nombre.value === "") {
    alert("Por favor ingrese su nombre");
    event.preventDefault();
    return false;
  } else if (nombre.value.length > 50) {
    alert("El nombre no puede contener más de 50 caracteres");
    event.preventDefault();
    return false;
  }

  // Validación del campo Correo electrónico
  const correoExp = /^\S+@\S+\.\S+$/;
  if (correo.value === "") {
    alert("Por favor ingrese su correo electrónico");
    event.preventDefault();
    return false;
  } else if (!correoExp.test(correo.value)) {
    alert("Por favor ingrese un correo electrónico válido");
    event.preventDefault();
    return false;
  }

  // Validación del campo Asunto
  if (asunto.value === "") {
    alert("Por favor ingrese un asunto");
    event.preventDefault();
    return false;
  } else if (asunto.value.length > 50) {
    alert("El asunto no puede contener más de 50 caracteres");
    event.preventDefault();
    return false;
  }

  // Validación del campo Mensaje
  if (mensaje.value === "") {
    alert("Por favor ingrese su mensaje");
    event.preventDefault();
    return false;
  } else if (mensaje.value.length > 300) {
    alert("El mensaje no puede contener más de 300 caracteres");
    event.preventDefault();
    return false;
  }

  enviar.disabled = false;

});

// Descargar PDF

document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón de descarga
  const botonPDF = document.querySelector("#boton-pdf");

  // Agregar un controlador de eventos al botón de descarga
  botonPDF.addEventListener("click", function() {
    // Obtener el elemento principal que se desea convertir en PDF
    const miCV = document.querySelector("#mi-cv");

    // Configurar las opciones de conversión de PDF
    const opcionesPDF = {
      margin: [1, 1, 1, 1],
      filename: 'mi-cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { format: 'a4', orientation: 'portrait' }
    };

    // Convertir el elemento principal en PDF
    html2pdf().from(miCV).set(opcionesPDF).save();

    // Abrir el PDF en una nueva pestaña
    window.open("mi-cv.pdf", "_blank");
  });
});

//slider

const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider__item');
const nextBtn = document.querySelector('.slider-next');
const prevBtn = document.querySelector('.slider-prev');

let currentIndex = 0;
let itemWidth = 0;

// Función que se encarga de ajustar el ancho de los items del slider
const adjustItemWidth = () => {
  itemWidth = slider.clientWidth;
  sliderItems.forEach(item => {
    item.style.width = `${itemWidth}px`;
  });
};

// Función que se encarga de mover el slider al índice especificado
const moveSlider = (index) => {
  slider.style.transform = `translateX(-${index * itemWidth}px)`;
  currentIndex = index;
};

// Función que se encarga de mover el slider al siguiente índice
const moveToNext = () => {
  if (currentIndex < sliderItems.length - 1) {
    moveSlider(currentIndex + 1);
  }
  else {
    moveSlider(0);
  }
};

// Función que se encarga de mover el slider al índice anterior
const moveToPrev = () => {
  if (currentIndex > 0) {
    moveSlider(currentIndex - 1);
  }
};

// Event listeners para los botones de siguiente y anterior
nextBtn.addEventListener('click', moveToNext);
prevBtn.addEventListener('click', moveToPrev);

// Event listener para ajustar el ancho de los items del slider cuando cambia el tamaño de la ventana
window.addEventListener('resize', adjustItemWidth);

// Ajustar el ancho de los items del slider al cargar la página
adjustItemWidth();

