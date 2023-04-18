console.log("Ejecutando JS...");

let nivel = document.getElementById("nivel");

nivel.addEventListener("change", function() {
    let valorSeleccionado = parseInt(nivel.value);
    // console.log("Valor seleccionado: " + valorSeleccionado)
    if (valorSeleccionado == 2) {
        valorSeleccionado = dimensions;
        console.log("El nivel seleccionado es el facil")
    } else if (valorSeleccionado == 4) {
        valorSeleccionado = dimensions;
        console.log("El nivel seleccionado es el medio")
    } else if (valorSeleccionado == 6) {
        valorSeleccionado = dimensions;
        console.log("El nivel seleccionado es el dificil")
    }
});

// nivel.addEventListener("change", function() {
//     let valorSeleccionado = parseInt(nivel.value);
//     if(!isNaN(valorSeleccionado)) {
//         console.log("Valor seleccionado: " + valorSeleccionado)
//     } else {
//         console.log("Valor no numerico");
//     }
// });

// let valorSeleccionado = document.querySelector('#nivel');

// valorSeleccionado.addEventListener('change', function() {
//     let nivelSeleccionado = valorSeleccionado.value;
//     console.log("Nivel seleccionado es: " + nivelSeleccionado);

//     in
//         if (dimensions === "2") {
//             selectors.tablero.setAttribute('grid-dimension', '2')
//         } else if (dimensions === "4") {
//             selectors.tablero.setAttribute('grid-dimension', '4')
//         } else if (dimensions === "6") {
//             selectors.tablero.setAttribute('grid-dimension', '6')
//         }

//         generateGame()
// });

// function seleccion() {
//     let nivel = document.getElementById("nivel").value;
//     document.getElementById("resultado").innerHTML = nivel;
//     let alerta = document.getElementById("resultado").innerHTML = nivel;
//     window.alert(alerta);
// };

// const nivel = document.getElementById("nivel");

// let nivelSeleccionado = nivel.value;

// nivel.addEventListener('change', function() {
//     nivelSeleccionado.nivel.value;
//     console.log("Nivel seleccionado", nivelSeleccionado)
// })

// function dimensionesSeleccionadas() {
//     dimensions = nivelSeleccionado;
//     console.log("Dimensiones del juego: "+ dimensions);

//     if (dimensions === "2") {
//         selectors.tablero.setAttribute('grid-dimension', '2')
//     } else if (dimensions === "4") {
//         selectors.tablero.setAttribute('grid-dimension', '4')
//     } else if (dimensions === "6") {
//         selectors.tablero.setAttribute('grid-dimension', '6')
//     }

//     generateGame()
// };