console.log("Ejecutando JS...");

const crono = new Crono(document.getElementById("crono"))

//-- Array que almacena números secretos
const secretkey = [];

//-- Generar números aleatorios con un valor máximo
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//-- Generamos números secretos y los almacenamos en un array
for (let i = 0; i < 10; i++) {
    let rnum = getRandomInt(9);
    secretkey.push(rnum.toString());
}

//-- Mostramos el contenido del array de números secretos en la consola
for (let j = 0; j < secretkey.length; j++) {
    console.log( j + ' Secret Key ' + secretkey[j]);
}


check_entorno() {
    //-- Comprobaciones antes de empezar
    //-- ...
    return ok;
  }
  
  gui.start.onclick = () => {
    
    if(check_entorno()) {
      //-- Si todo está ok ejecutamos la funcionalidad de la función de callback asociada al evento click.
    }
  }
  