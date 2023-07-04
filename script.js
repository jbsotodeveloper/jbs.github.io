let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
 
function copyEmail(){
    
      // Gather form data
      let nombre = $("#nombre").val();
      let email = $("#email").val();
      let idea = $("#idea").val();
      let description = $("#description").val();
      let recaptchaResponse = grecaptcha.getResponse();
      // Create an object with the form data
      let formData = {
        idea: idea,
        description: description,
        nombre: nombre,
        email: email,
        recaptchaResponse: recaptchaResponse
      };
      console.log(formData);
      return formData;
 
    // Send the form data to the backend using AJAX with jQuery
    $.ajax({
      url: "/submit-form",
      type: "POST",
      data: formData,
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      },
      success: function(response) {
        // Handle the response from the backend (if needed)
        console.log(response);
 
      },
      error: function(error) {
        // Handle any errors that occur during the AJAX request
        console.error(error);
      }
    });
}
 

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function setActiveLink() {
  let currentSection = sections[0];

  for (let i = 1; i < sections.length; i++) {
    if (Math.abs(sections[i].offsetTop - window.pageYOffset) < Math.abs(currentSection.offsetTop - window.pageYOffset)) {
      currentSection = sections[i];
    }
  }

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.href.endsWith(`#${currentSection.id}`)) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);

const modalButtons = document.querySelectorAll('.modal-button');
const modalOverlay = document.querySelector('.modal-overlay');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalClose = document.querySelectorAll('.modal-close');

// Create an array of objects to store the data for each modal
const modals = [
  {
    image: 'img/web_responsive2.jpeg',
    title: 'Desarrollo Web',
    description: 'Crea la página web de tus sueños, el desarrollo responsivo te permite utilizar tu Aplicación Web en todos los dispositivos'
  },
  {
    image: 'img/desarollo_movil.jpeg',
    title: 'Desarrollo Móvil',
    description: 'Crea aplicaciónes nativas para Android, IOS o multiplataforma'
  },
  {
    image: 'img/data_science.jpeg',
    title: 'Inteligencia Artificial, Machine Learning y Big Data',
    description: 'Crea modelos predictivos, análisis de datos, Dashboard'
  },
  {
    image: 'img/fotografia.jpeg',
    title: 'Fotografía',
    description: 'Fotografía de paisajes, bodas, bautizos, etc.'
  },
  {
    image: 'img/drone.jpeg',
    title: 'Fotografía y Videos aéreos con Drones',
    description: 'Fotografías y videos aéreos'
  }
  ,
  {
    image: 'img/cursos.jpeg',
    title: 'Auditorias, Cursos, Clases y Tutoriales',
    description: 'Aprende programación de forma dinámica, individual o grupal, apoyo en proyectos, auditorias de sistemas'
  }
];

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the index of the clicked button
    document.body.classList.add('modal-open');

    const index = button.getAttribute('data-index');

    // Get the corresponding data from the modals array
    const { image, title, description } = modals[index];

    // Set the image, title, and description in the modal
    modalImage.setAttribute('src', image);
    modalTitle.innerText = title;
    modalDescription.innerText = description;

    // Show the modal overlay
    modalOverlay.style.display = 'block';
  });
});

modalClose.forEach(button => {
  button.addEventListener('click', () => {
    // Hide the modal overlay
    modalOverlay.style.display = 'none';
    document.body.classList.remove('modal-open');
  });
});

 



