//-- Declaración de variables y objetos

//-- Obtención del canvas y de los elementos HTML a usar

//-- Función principal de actualización
function update() 
{
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos

  //-- 2) Borrar el canvas

  //-- 3) Pintar los elementos en el canvas

  //-- 4) Repetir
  requestAnimationFrame(update);
}

//-- Otras funciones....

//-- Hay que llamar a update la primera vez
update();


//---------------------------- Nuestro programa -------------------------------------

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

//-- Velocidad del proyectil
let velp = 5;

//-- Función principal de actualización
function lanzar() 
{
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos
  xp = xp + velp;

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

//-------------------- Escenario secundario ---------------------------


//-- Coordenadas iniciales del objetivo
let xomin = 200;
let xomax = 770;
let xo = 500; //getRandomXO(xomin,xomax);
let yo = 370;

//-- Array que almacena las coordenadas del objeto
const coordenadas = [];

//-- Crear una funcion que genere posiciones nuevas del objeto
function getRandomXO(xomin, xomax,) {
    for (let i = 0; i < 2; i++) {
        coordenadas += Math.floor(Math.random() * 10)
    }
    return coordenadas;
}

getRandomXO();
console.log("Coordenadas: " + coordenadas)


//-- función para pintar el objetivo
function dibujarO(x,y) {

    //-- Pintando el objetivo
    ctx.beginPath();

    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'red';

    //-- Dibujar el relleno
    ctx.fill()    

    //-- Dibujar el trazo
    ctx.stroke();

    ctx.closePath();
}

//---------------- Actualizar funcion de animacion --------------------

//-- Dibujar el objetivo
dibujarO(xo,yo); // Pintar el objetivo

//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil

//-- Velocidad del proyectil
let velp = 1;

//-- Función principal de actualización
function lanzar() 
{
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos
  xp = xp + velp;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarO(xo,yo); // Pintar el objetivo

  dibujarP(xp, yp, 50, 50, "blue"); // Pintar el proyectil

  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}

//--------------------- Funcion para reiniciar ---------------------

//-- Acceder al botón de inicio
const btnIniciar = document.getElementById("btnIniciar");

//-- Función de retrollamada del botón iniciar
btnIniciar.onclick = () => {
    location.reload();
}

