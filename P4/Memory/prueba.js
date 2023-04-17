console.log("Ejecutando JS...");

let nivel = document.getElementById("nivel");

nivel.addEventListener("change", function() {
    let valorSeleccionado = parseInt(nivel.value);
    if(!isNaN(valorSeleccionado)) {
        console.log("Valor seleccionado: " + valorSeleccionado)
    } else {
        console.log("Valor no numerico");
    }
});

