// Primer estado, al pulsar un digito se pondra en marcha el contador

// Ultimo esta cuando se adivinen toda la convinacion se parara el contador

// Cada vez que damos a reseat se genera una nueva clave
console.log("Ejecutando JS...");

let clave = [];
const claveAdivinar = "claveAdivinar";
const crono = new Crono(document.getElementById("crono"))

function generarClave() {
    let clave = "";
    for (let i = 0; i < 4; i++) {
        clave += Math.floor(Math.random()*10)
    }
    return clave;
}

function mostrarClave(clave) {
    let claveSecreta = "";
    for (let i = 0; i < clave.length; i++) {
        claveSecreta += "*";
    }
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
        
        clave[numSecreto] = null;
        if (clave.every((x) => x === null)) {
            crono.stop();
            alert("¡Has conseguido adivinar el numero! Tu tiempo ha sido de " + crono.display.innerHTML);
        }
    } else {
        let display = document.getElementById("display");
        let valorDisplay = parseInt(display.innerHTML);
        display.innerHTML = valorDisplay + 1;
        ev.target.style.color = "red";
    }
}

