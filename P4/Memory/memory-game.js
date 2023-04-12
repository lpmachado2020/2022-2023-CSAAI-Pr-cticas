console.log("Ejecutando JS...");

const movimientos = document.getElementsByClassName("movimientos");
const tablero = document.getElementsByClassName("tablero");
const card_front = document.getElementsByClassName("card-front");
const card_back = document.getElementsByClassName("card-back");

//-- Elementos de la gui
const gui = {
    timer: document.getElementsByClassName("timer")
}
  
//-- Definir un objeto cronómetro
const crono = new Crono(gui.timer);
  
//-- Función de retrollamada del botón de disparo
gui.onclick = () => {
    crono.start();
    console.log("Start!!!")
}
  
//-- Función de retrollamada del botón iniciar
gui.onclick = () => {
    location.reload();
    console.log("Reset!!!")
}
  