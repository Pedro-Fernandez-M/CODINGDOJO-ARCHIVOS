

var eliminarBoton = document.getElementById("donate1");
eliminarBoton.addEventListener("click", function(){
    this.remove();
})

var sumador = document.getElementById("botones1");
sumador.addEventListener("click", function(){
     
    adiciona1=document.getElementById("contador1");
    adiciona1.innerText = parseInt(adiciona1.innerText)+1+" petting";
            
})




var sumador2 = document.getElementById("botones2");
sumador2.addEventListener("click", function(){
    adiciona1=document.getElementById("contador2");
    adiciona1.innerText = parseInt(adiciona1.innerText)+1+" carisias ";
}
)

var sumador3 = document.getElementById("botones3");
sumador3.addEventListener("click", function(){
    adiciona1=document.getElementById("contador3");
    adiciona1.innerText = parseInt(adiciona1.innerText)+1+ "  abrazos";
}
)




var seleccionaAnimal = document.getElementById("any");
seleccionaAnimal.addEventListener("change", function(){

        switch (seleccionaAnimal.value) {
            case "CACHORRO":
                alert("seleccionaste cachorro");
                break;
            case "MICHI":
                alert("seleccionaste michi");
                break;
            case "O":
                alert("seleccionaste otra");
                break;
        }    
})