console.log("Ejecutando JS...");

//-- Obtención del canvas y de los elementos HTML a usar
const canvas = document.getElementById("ctiro");

const angulo_disparo = document.getElementById("rangeField2");
const velocidad_disparo = document.getElementById("rangeField1");

const angulo_valor = document.getElementById("output2");
const velocidad_valor = document.getElementById("output1");

//-- Definir el tamaño del canvas
canvas.width = 700;
canvas.height = 300;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Posicion inicial del proyectil
let xp = 0;
let yp = 260;
// let xop = xp;
// let yop = xy;

//-- Tamaño del proyectil
let lx = 40;
let ly = 40;

//-- función para pintar el proyectil
function dibujarP(xp,yp,lx,ly,color) {

  //-- Pintando el proyectil
  ctx.beginPath();

  //-- Definir un rectángulo de dimensiones lx x ly,
  ctx.rect(xp, yp, lx, ly);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = color;

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();

  ctx.closePath();
  console.log("Dibuja el proyectil correctamente")
}

//-- Dibujar el proyectil
dibujarP(xp, yp, lx, ly, "yellow"); // Pintar el proyectil


// -- Coordenadas iniciales del objetivo
let xomin = 100;
let xomax = 675;
let xo = getRandomInt(xomin, xomax);
let yo = 275;

//-- función para pintar el objetivo
function dibujarO(xo,yo) {

  //-- Pintando el objetivo
  ctx.beginPath();

  //-- Dibujar un circulo: coordenadas x,y del centro
  //-- Radio, Angulo inicial y angulo final
  ctx.arc(xo, yo, 25, 0, 2 * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.fillStyle = 'red';

  //-- Dibujar el relleno
  ctx.fill()    

  //-- Dibujar el trazo
  ctx.stroke();

  ctx.closePath();
  console.log("Dibuja el objeto correctamente")
}

dibujarO(xo, yo);


// //-- Velocidad del proyectil
// let velp = 1;

// //-- Función principal de actualización
// function lanzar() 
// {
// //-- Implementación del algoritmo de animación:

// //-- 1) Actualizar posición de los elementos
// xp = xp + velp;

// //-- 2) Borrar el canvas
// ctx.clearRect(0, 0, canvas.width, canvas.height);

// //-- 3) Pintar los elementos en el canvas
// dibujarO(xo,yo); // Pintar el objetivo
// dibujarP(xop, yop, 40, 40, "blue"); // Pintar el proyectil

// //-- 4) Repetir
// requestAnimationFrame(lanzar);
// }

// //-- Datos para el tiro parabolico
// const g = 9.8; //-- Gravedad
// let t = 0; //-- Tiempo

// function tiroParabolico() {
//   angp = Number(angulo_disparo);
//   velp = Number(velocidad_disparo);

//   xp = xop + velp * Math.cos(angp * Math.PI / 180) * t;
//   yp = yop + velp * Math.sin(angp * Math.PI / 180) * t - 0.5 * gt * t * t;
//   t = +0.1; //-- Cuanto avanza el proyectil en el tiro
// }


//-- Genera nuevas coordenadas para el objeto
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//-- Para usar los valores seleccionados de angulo y velocidad del disparo
let angulo = angulo_disparo.value;
let velocidad = velocidad_disparo.value;

angulo_disparo.addEventListener('input', function() {
  angulo = angulo_disparo.value;
  console.log("Angulo: ", angulo);
  angulo_valor.textContent = angulo;
  
});

velocidad_disparo.addEventListener('input', function() {
  velocidad = velocidad_disparo.value;
  console.log("Velocidad: ", velocidad);
  velocidad_valor.textContent = velocidad;
});


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

// //-- Llamamos a la funcion por primera vez
// lanzar();