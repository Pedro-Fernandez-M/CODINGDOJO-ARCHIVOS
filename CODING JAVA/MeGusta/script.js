// var botones = document.querySelectorAll(".btnContador");
// for (var boton of botones){
//     boton.addEventListener("click", function(){
//         var divFlex = this.parentElement
//         var spanContador = divFlex.querySelector(".contador")
//         var contador = parseInt(spanContador.innerText);
//         spanContador.innerText = contador + 1;
//     })
// }








var botones = document.querySelectorAll(".btnContador");
for (var boton of botones){
    boton.addEventListener("click", function(){
    console.log(this);
        varPadre=this.parentElement;
        console.log(varPadre);
        var spanTexto=varPadre.querySelector("#conta1");
        console.log(spanTexto);
        var conta1=parseInt(spanTexto.innerText);
        spanTexto.innerText=conta1+1;


    })}