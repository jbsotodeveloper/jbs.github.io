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

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    
        var navHeight = $(window).height() - 100;
 
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');

            console.log("Add on class")
        } else {
            $('.navbar-default').removeClass('on');
            console.log("Remove on class")
        }
} 


var tooltip = document.getElementById('tooltip')
tooltip.style.display = "none";
function copyEmail(){
    let str = 'jbsoto.developer@gmail.com'
    tooltip.style.display = "block";
    return navigator.clipboard.writeText(str);

}
