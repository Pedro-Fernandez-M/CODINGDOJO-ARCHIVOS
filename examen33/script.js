var carrito = document.getElementById("carrito");
carrito.addEventListener("click", function(){

    alert("mensaje que aparece");

})   



var planta = document.getElementById("suculenta1");
planta.addEventListener("mouseover", function(){

    this.src ="img/succulents-2.jpg";
})


var planta2 = document.getElementById("suculenta1");
planta2.addEventListener("mouseout", function(){

    this.src ="img/succulents-1.jpg";
})




var eliminar = document.getElementById("btn22");
eliminar.addEventListener("click", function(){

    this.parentElement.remove();


})