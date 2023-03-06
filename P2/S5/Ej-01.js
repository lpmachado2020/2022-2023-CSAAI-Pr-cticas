//-- Contador de clicks de boton
//-- Arranca cuando el DOM esta listo por el atributo defer

console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM
const display = document.getElementById("display");
const boton = document.getElementById("boton");

//-- Contador de clicks
let cont = 0; //-- Comienza en cero

//-- Configurar retrollamada del boton
boton.onclick = () => {
  console.log("Click!");

  //-- Incrementar contador
  cont += 1; //-- Se incrementa en 1

  //-- Actualizar el display
  display.innerHTML = cont;
}