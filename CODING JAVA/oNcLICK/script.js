// Obtenemos el botón por su id
var botonTres = document.getElementById("tercerBoton");

// Agregamos un evento 'click' al botón
botonTres.addEventListener("click", function() {
    //Elimino el botón	
    this.remove();
});



// Obtenemos el botón por su id
var InicioSesion = document.getElementById("iniciarSesion");

// Agregamos un evento 'click' al botón
InicioSesion.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "Cerrar Sesión";

})

var ALERTA = document.getElementById("primerBoton");

// Agregamos un evento 'click' al botón
ALERTA.addEventListener("click", function() {
    alert("Gatos Atigrados was liked");

}
)

var ALERTA2 = document.getElementById("segundoBoton");

// Agregamos un evento 'click' al botón
ALERTA2.addEventListener("click", function() {
    alert("Golden Retriever was liked");

}
)


let DOSBOTON = document.getElementById("segundoBoton");
let Conta2 = document.getElementById("contador2");
let count = 0;

DOSBOTON.addEventListener('click', () => {
  count++;
  Conta2.innerText = count;
  Conta2.innerText = count + " " + "me gusta";
});



let PRIMERBOTON = document.getElementById("primerBoton");
let Conta1 = document.getElementById("contador1");
let Conta = 0;

PRIMERBOTON.addEventListener('click', () => {
  Conta++;
  Conta1.innerText = Conta;
  Conta1.innerText = Conta + " " + "me gusta";
});


