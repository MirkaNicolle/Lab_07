let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByClassName("titulo")[0].style.top = "0px"
    } else {
        document.getElementsByClassName("titulo")[0].style.top = "-120px"
    }
    ubicacionPrincipal = desplazamientoActual;
}) 

