//-- Los ejercicios seis y siete tienen el mismo comportamiento
//-- Esta notacion es mas completa porque ahorramos definir el nombre de la funcion

console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test.onclick = function () {
  console.log("Click sobre el párrafo...")
}

// -- Ya no tenemos la funcion manejador_parrafo()
//-- Se incluye directamente en test.onclick