console.log("Ejecutando JS...");

const gui = {
    display: document.getElementById("display"),
    start: document.getElementById("start"),
    stop: document.getElementById("stop"),
    reset: document.getElementById("reset"),
}

digitos = document.getElementsByClassName("digito");
claveSecreta = document.getElementsByClassName("claveSecreta");

const claveAdivinar = "claveAdivinar";
const crono = new Crono(document.getElementById("crono"))

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
}


function generarClave() {
    let clave = "";
    for (let i = 0; i < 4; i++) {
        clave += Math.floor(Math.random()*10)
    }
    return clave;
}

function mostrarClave(clave) {
    let claveSecreta = "*".repeat(clave.length);
    document.getElementById(claveAdivinar).innerHTML = claveSecreta;
}

function comprobarDigito(digito, clave) {
    return clave.includes(digito);
}

function mostrarDigito(digito, clave, posicion) {
    let claveVer = document.getElementById(claveAdivinar).innerHTML;
    claveVer = claveVer.substring(0, posicion) + digito + claveVer.substring(posicion + 1);
    document.getElementById("claveAdivinar").innerHTML = claveVer;
}

function color(posicion, color) {
    let digitos = document.getElementsByClassName("digito");
    digitos[posicion].style.color = color;
}

function inicio(ev) {
    if (!crono.timer) {
        crono.start();
    }
    let num = ev.target.innerHTML;
    let numSecreto = clave.indexOf(num);
    if (numSecreto > -1) {
        mostrarDigito(num, clave, numSecreto);
        color(numSecreto, "green");
        clave = clave.substring(0, numSecreto) + null + clave.substring(numSecreto + 1);
        if (!clave.includes(num)) {
            ev.target.removeEventListener("click", inicio)
        }
        if (!clave.includes(null)) {
            crono.stop();
            alert("¡Has conseguido adivinar el numero! Tu tiempo ha sido de " + crono.display.innerHTML);
        }
    } else {
        let display = document.getElementById("display");
        let valorDisplay = parseInt(display.innerHTML);
        display.innerHTML = ++valorDisplay;
        ev.target.style.color = "red";
    }
}

inicio();

