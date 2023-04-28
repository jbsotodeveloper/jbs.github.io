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

var tooltip = document.getElementById('tooltip')
tooltip.style.display = "none";
function copyEmail(){
    let str = 'jbsoto.developer@gmail.com'
    tooltip.style.display = "block";
    return navigator.clipboard.writeText(str);

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
