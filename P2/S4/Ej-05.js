
//-- Tenemos acceso al documento html mediante  
//-- el objeto document

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Mostrar en la consola el contenido del párrafo
//-- (es la propiedad innerHTML)
//-- Imprimimos por pantalla con .log
console.log("Párrafo test leído. Dice:")
console.log(test.innerHTML)