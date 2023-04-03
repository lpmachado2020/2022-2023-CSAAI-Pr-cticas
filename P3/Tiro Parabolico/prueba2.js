console.log("Ejecutando JS...");

const canvas = document.getElementById("ctiro");

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

//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil


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

//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
    lanzar();
}