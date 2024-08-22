function saluda() {

    console.log("¡Hola!");
 
 }
 
 saluda();
 
 console.log("¿Cómo estás?"); // "¿Cómo estás?"


 function saluda() {

    console.log("¡Hola!");
 
    return 50;
 
 }
 
 var resultado = saluda();
 
 console.log("El resultado es:"+resultado);  //El resultado es : 50);


 function suma(numero) {

    console.log("El número es:"+numero);
 
    return numero + 20;
 
 }
 
 var resultado = suma(5);
 
 console.log("El resultado es:"+resultado);//El resultado es: 25);





 var numero = 10; 

console.log(numero);

function imprimeYRegresa(numero2) {

   console.log(numero2);

   return numero2;

}

var resultado = imprimeYRegresa(7);

console.log(resultado); // 7

console.log(numero); //10







var numero = 10;

console.log(numero);

function alCuadrado(numero2) {

   console.log(numero2);

   return numero2 * numero2;

}

var resultado = alCuadrado(7);

console.log(resultado);// 49

console.log(numero); // 10





function alCuadrado(numero) {

    console.log("El número es:"+numero);
 
    var cuadrado = numero * numero;
 
    return cuadrado;
 
 }
 
 var resultado = alCuadrado(2) + alCuadrado(5);
 
 console.log("El resultado es:"+resultado); // El resultado es: 29








 function sumatoria(numero1, numero2) {

    return numero1 + numero2;
 
 }
 
 console.log(sumatoria(4, 3)); //7
 
 console.log(sumatoria(2, 9)); // 11










 function imprimirSumatoria(numero1, numero2) {

    console.log(numero1);
 
    return numero1 + numero2;
 
 }
 
 console.log(imprimirSumatoria(4, 3)); //7
 
 console.log(imprimirSumatoria(2, 9)); //11 







 function sumatoria(numero1, numero2) {

    var suma = numero1 + numero2
 
    console.log("La suma es:"+suma);
 
    return suma;
 
 }
 
 var resultado = sumatoria(4, 3) + sumatoria(2, 9);
 
 console.log("El resultado es:"+resultado);  //El resultado es: 19







 function sumatoria(numero1, numero2) {

    var suma = numero1 + numero2
 
    console.log("La suma es:"+suma);
 
    return suma;
 
 }
 
 var resultado = sumatoria(1,2) + sumatoria(3,sumatoria(4,1)) + sumatoria(sumatoria(2,3),sumatoria(4,1));
 
 console.log("El resultado es:"+resultado); //El resultado es: 21gmail.com