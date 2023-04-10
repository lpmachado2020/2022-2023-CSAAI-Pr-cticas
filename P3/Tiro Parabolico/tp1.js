console.log("Ejecutando JS...");

//-- Declaración de variables y objetos



//-- Obtención del canvas y de los elementos HTML a usar
const canvas = document.getElementById("ctiro");

const angulo_disparo = document.getElementById("angulo_disparo");
const velocidad_disparo = document.getElementById("velocidad_disparo");

const angulo_rango = document.getElementById("angulo_disparo");
const velocidad_rango = document.getElementById("velocidad_disparo");

//-- Para darle valor a los deslizadores de velocidad y angulo de disparo
angulo_disparo.innerHTML = angulo_rango.value;
velocidad_disparo.innerHTML = velocidad_rango.value;

//-- Definir el tamaño del canvas
canvas.width = 400;
canvas.height = 200;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

  //-- Pintando el proyectil
  ctx.beginPath();

  //-- Definir un rectángulo de dimensiones lx x ly,
  ctx.rect(x, y, lx, ly);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = color;

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();

  ctx.closePath();
}

//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 345;
let xp = xop;
let yp = yop;

// //-- Dibujar el objetivo
// dibujarO(xo,yo); // Pintar el objetivo

//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil

// //-- Velocidad del proyectil
// let velp = 1;

//-- Función principal de actualización
function lanzar() 
{
//-- Implementación del algoritmo de animación:

//-- 1) Actualizar posición de los elementos

//-- 2) Borrar el canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

//-- 3) Pintar los elementos en el canvas
dibujarP(xp, yp, 50, 50, "blue"); // Pintar el proyectil

//-- 4) Repetir
requestAnimationFrame(lanzar);
}

// //-- Coordenadas iniciales del objetivo
// let xomin = 200;
// let xomax = 770;
// let xo = 500; //getRandomXO(xomin,xomax);
// let yo = 370;

// let x = 500;
// let y = 350;

// //-- Array que almacena las coordenadas del objeto
// const coordenadas = [];

// //-- Crear una funcion que genere posiciones nuevas del objeto
// function getRandomXO(xomin, xomax, yo) {
//   const x = Math.floor(Math.random() * (xomax - xomin + 1) + xomin);
//   return {x: x, y: yo};
// }

// getRandomXO();
// console.log(x,y)


// //-- función para pintar el objetivo
// function dibujarO(x,y) {

//   //-- Pintando el objetivo
//   ctx.beginPath();

//   //-- Dibujar un circulo: coordenadas x,y del centro
//   //-- Radio, Angulo inicial y angulo final
//   ctx.arc(x, y, 25, 0, 2 * Math.PI);
//   ctx.strokeStyle = 'blue';
//   ctx.lineWidth = 2;
//   ctx.fillStyle = 'red';

//   //-- Dibujar el relleno
//   ctx.fill()    

//   //-- Dibujar el trazo
//   ctx.stroke();

//   ctx.closePath();
// }

//-- Elementos de la gui
const gui = {
  display: document.getElementById("display"),
  btnLanzar: document.getElementById("btnLanzar"),
  btnIniciar: document.getElementById("btnIniciar")
}

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//-- Función de retrollamada del botón de disparo
gui.btnLanzar.onclick = () => {
  crono.start();
  lanzar();
  console.log("Start!!!")
}

//-- Función de retrollamada del botón iniciar
gui.btnIniciar.onclick = () => {
  location.reload();
  console.log("Reset!!!")
}