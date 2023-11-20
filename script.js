
function cambiarColorFondoAutomatico(){

var colores = ["#0f420f", "#052505", "#040e04", "#0f5013", "#083b0b", "#063d0a"];
var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
document.body.style.backgroundColor = colorAleatorio;
}

setInterval(cambiarColorFondoAutomatico, 2000);

