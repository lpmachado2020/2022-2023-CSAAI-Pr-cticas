// // Primer estado, al pulsar un digito se pondra en marcha el contador

// // Ultimo esta cuando se adivinen toda la convinacion se parara el contador

// // Cada vez que damos a reseat se genera una nueva clave
// console.log("Ejecutando JS...");

console.log("Ejecutando JS...");

const digitos = document.getElementsByClassName("digito");

const clave1 = document.getElementById("clave1");
const clave2 = document.getElementById("clave2");
const clave3 = document.getElementById("clave3");
const clave4 = document.getElementById("clave4");

const clave = document.getElementsByClassName("clave");

let secretkey = [];

//-- Generar números aleatorios del 0 al 9
function getRandomInt() {
    for (let i = 0; i < 4; i++) {
        secretkey += Math.floor(Math.random() * 10)
    }
    return secretkey;
}

getRandomInt();
console.log("Clave secreta: " + secretkey)

//---- Necesitamos estados
const ESTADO = {
    INIT: 0,
    STATE_1: 1,
}

let estado = ESTADO.INIT;

function digito(ev) {
}

//-- Funcion de retrollamada para los botones
for (let boton of digitos) {
    boton.onclick = target.value
}


//-- Elementos de la gui
const gui = {
    display: document.getElementById("display"),
    start: document.getElementById("start"),
    stop: document.getElementById("stop"),
    reset: document.getElementById("reset")
}

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}

//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
    estado = ESTADO.INIT;
    clave.innerHTML = "*";
}