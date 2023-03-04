console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
var button = document.getElementById('button')
var test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
button.onclick = () => {
  test.innerHTML=("Texto añadido en HTML despues de presionar el boton")
}