
var Botonizar = document.getElementById("btnizar");

var EliminarBtn= document.getElementById("btnEliminar");
EliminarBtn.addEventListener("click", function() {
    this.remove();
});



////////////////////////////////////////////////////////////////




var Suma1=document.getElementById("btn1");
Suma1.addEventListener("click", function() {
   // console.log("JHKGSADKSJAD");
    Contador1=document.getElementById("text1");
    Contador1.innerText = parseInt(Contador1.innerText) + 1 +" petting(s)";
})




var SELECCIONADOR = document.getElementById("Pet");
SELECCIONADOR.addEventListener("change", function() {

    if (SELECCIONADOR.value == "cat") {
        console.log("gato");
        alert("desqadaasd");
    }
    else if (SELECCIONADOR.value == "dog") {
        console.log("perro");
        alert("dsaqdsa");
    }


})