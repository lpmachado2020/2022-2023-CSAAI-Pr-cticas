console.log("Ejecutando JS...");

//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- Acceder al botón de inicio
const btnIniciar = document.getElementById("btnIniciar");

//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
  lanzar();
}

//-- Función de retrollamada del botón iniciar
btnIniciar.onclick = () => {
  location.reload();
}

let display = document.getElementById(display);

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

