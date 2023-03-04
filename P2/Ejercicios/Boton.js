console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
var button = document.getElementById('button')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
button.onclick = () => {
  console.log("Mensaje de prueba al hacer click")
}