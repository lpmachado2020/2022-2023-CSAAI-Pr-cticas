console.log("Ejecutando JS...");

let claveSecreta = [];

//-- Para generar una clave secreta.
//-- Lo pasamos a decimal y luego lo redondeamos
//-- Pasamos los valores al array claveSecreta
for (let i=0; i<4; i++) {
    claveSecreta.push(Math.floor(Math.random()*10));
}

const gui = {
    display: document.getElementById("display"),
    start: document.getElementById("start"),
    stop: document.getElementById("stop"),
    reset: document.getElementById("reset"),
}

digitos = document.getElementsByClassName("digito");
claves = document.getElementsByClassName("claveSecreta");

const crono = new Crono(gui.display);


