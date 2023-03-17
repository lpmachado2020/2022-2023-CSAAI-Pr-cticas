console.log("Ejecutando JS...");

const digitos = document.getElementsByClassName("digito");
let clave = document.getElementsByClassName("clave");
let count = 0;
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

//-- Funcion retrollamada de los botones y define los estados
function digito(ev) {
    console.log("Valor: " + ev);
    //-- Definimos funcionalidad del primer estado
    if (estado == ESTADO.INIT) {
        secretkey = getRandomInt();

        //-- Pasamos al siguiente estado
        estado = ESTADO.STATE_1;
        crono.start();
    }
    
    //-- Iteraciones sobre cada click
    if (estado == ESTADO.STATE_1) {
        i = 0;
        for (let key of secretkey){
            if (key == ev) {
                if (clave[i]) {
                clave[i].innerHTML = key;
                //-- Cuando se acierta cambiamos el color
                clave[i].style.color = "green";
                count += 1;
                console.log('Count: ' + count);
                }
            }
            i += 1;
        }
        console.log(count);
        //-- Para el crono cuando se adivinen las cuatro
        if (count == 4) {
            crono.stop();
        }
    }
}

//-- Bucle que recorrer todos los digitos
for (let boton of digitos) {
    boton.onclick = (ev) => {
        digito(ev.target.value)
    }
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
    //-- Recarga la pagina cuando se resetea
    window.location.reload(); 
}