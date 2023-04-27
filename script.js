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

  // Habilitar el botón de envío si todos los campos son válidos
  enviar.disabled = false;

  // Envío del formulario
  // Aquí podrías agregar código para enviar el formulario a un servidor web
});

