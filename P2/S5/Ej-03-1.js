console.log("Ejecutando JS...");

//-- Crear objeto gui, con los elementos de la interfaz gráfica. Lo que hay en el body
//-- Al tenerlo agrupado podemos pasarlo como parámetro o asignarlo
//-- a otro objeto
const gui = {
  display: document.getElementById("display"),
  boton: document.getElementById("boton"),
}

//-- Objeto contador: Contiene el valor y el método para incrementarse
//-- inc es el metodo para incrementar el valor 0
const counter = {
  valor: 0,
  dec : function(value) {
    this.valor += value;
    gui.display.innerHTML = this.valor;
  }
}

//-- Acciones: Ligar el botón al contador
//-- El counter.inc(1) indica que queremos incrementar 1 el valor 0 mediante el metodo inc
gui.boton.onclick = () => {
  counter.dec(-1)
}