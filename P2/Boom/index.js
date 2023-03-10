// Primer estado, al pulsar un digito se pondra en marcha el contador

// Ultimo esta cuando se adivinen toda la convinacion se parara el contador

// Cada vez que damos a reseat se genera una nueva clave
console.log("Ejecutando JS...");

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

function mostrarDigito() {
    
}
