/*ELiminar el boton*/
var BotonEliminar = document.getElementById("btn3");
BotonEliminar.addEventListener("click", function() {
    this.parentElement.remove();
});

// alerta de 13 segundos
setTimeout(function(){
    alert("The Ninja Have Won!");
    },13000);

var BotonNinja = document.getElementById("NinjaTeam");
BotonNinja.addEventListener("click", function() {
    console.log("hola");  
    BotonNinja.innerText = parseInt(BotonNinja.innerText) + 1;
})

var BotonPirate = document.getElementById("Piratesteam");
BotonPirate.addEventListener("click", function() {
    console.log("hola");  
    BotonPirate.innerText = parseInt(BotonPirate.innerText) + 1;
    
})