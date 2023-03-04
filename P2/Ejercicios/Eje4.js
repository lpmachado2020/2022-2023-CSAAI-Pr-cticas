console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
button1.onclick = () => {
  test.innerHTML+=(" 1")
}

button2.onclick = () => {
    test.innerHTML+=(" 2")
}