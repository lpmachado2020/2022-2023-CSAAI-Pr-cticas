console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

// //-- Acceder al botón de disparo
// const btnLanzar = document.getElementById("btnLanzar");
// // const btnIniciar = document.getElementById("btnIniciar");

// //-- Coordenadas iniciales del proyectil
// let xop = 5;
// let yop = 345;
// let xp = xop;
// let yp = yop;

// //-- función para pintar el proyectil
// function dibujarP(x,y,lx,ly,color) {

//   //-- Pintando el proyectil
//   ctx.beginPath();

//   //-- Definir un rectángulo de dimensiones lx x ly,
//   ctx.rect(x, y, lx, ly);

//   //-- Color de relleno del rectángulo
//   ctx.fillStyle = color;

//   //-- Mostrar el relleno
//   ctx.fill();

//   //-- Mostrar el trazo del rectángulo
//   ctx.stroke();

//   ctx.closePath();
//   console.log("Entra en la funcion dibujarP");
// }

// //-- Dibujar el proyectil
// dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil


// //-- Función principal de actualización
// function lanzar() 
// {
//   //-- Implementación del algoritmo de animación:

//   //-- 1) Actualizar posición de los elementos

//   //-- 2) Borrar el canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   //-- 3) Pintar los elementos en el canvas
//   dibujarP(xp, yp, 50, 50, "blue"); // Pintar el proyectil

//   //-- 4) Repetir
//   requestAnimationFrame(lanzar);
// }

// //-- Función de retrollamada del botón de disparo
// btnLanzar.onclick = () => {
//   console.log("Lanzamiento iniciado!!")
//   lanzar();
// }

// // //-- Función de retrollamada del botón iniciar
// // btnIniciar.onclick = () => {
// //   console.log("Tiro reiniciado!")
// //   location.reload();
// // }

// //-- Dibujar el proyectil
// dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil

// //-- Velocidad del proyectil
// let velp = 5;

// //-- Función principal de actualización
// function lanzar() 
// {
//   //-- Implementación del algoritmo de animación:

//   //-- 1) Actualizar posición de los elementos
//   xp = xp + velp;

//   //-- 2) Borrar el canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   //-- 3) Pintar los elementos en el canvas
//   dibujarP(xp, yp, 50, 50, "blue"); // Pintar el proyectil

//   //-- 4) Repetir
//   requestAnimationFrame(lanzar);
// }




// // //-- Elementos de la gui
// // const gui = {
// //   display: document.getElementById("display")
// // }

// // //-- Definir un objeto cronómetro
// // const crono = new Crono(gui.display);

// // //-- Arranque del cronometro
// // gui.start.onclick = () => {
// //   console.log("Start!!");
// //   crono.start();
// // }

// // //-- Detener el cronómetro
// // gui.stop.onclick = () => {
// //   console.log("Stop!");
// //   crono.stop();
// // }

// //-- Reset del cronómetro
// gui.reset.onclick = () => {
//   console.log("Reset!");
//   crono.reset();
// }