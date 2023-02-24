//-- Notacion aun mas comparta que los ejercicios 6 y 7
//-- Nos ahorramos poner funcion por =>

console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test.onclick = () => {
  console.log("Click sobre el párrafo...")
}