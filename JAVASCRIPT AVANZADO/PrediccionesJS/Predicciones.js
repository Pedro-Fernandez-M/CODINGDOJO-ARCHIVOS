// const info = {

//     personal: {

//         nombre: 'Carlos',

//         apellido: 'Vega',

//         detalles: {

//             edad: 30,

//             ocupacion: 'Ingeniero'

//         }

//     }

// };

// const { personal: { detalles: { edad, salario } } } = info;

// console.log(edad); //30



// console.log(salario); //undefined


//--------------------------------------------------------------

// const objetoA = { a: 1, b: 2, c: 3 };

// const objetoB = { b: 4, c: 5, d: 6 };

// const resultado = { ...objetoA, ...objetoB };

// console.log(resultado);
// { a: 1, b: 4, c: 5, d: 6 }


//  3. Analiza el alcance de las variables dentro de bloques y funciones.

// function verificar() {

//     if (true) {

//         const a = 2;

//         let b = 3;

//         var c = 4;

//     }

//     console.log(c); //undefined

//     console.log(a); //undefined
//     console.log(b);// undefined

//     //entra al if pero afuera del if no estan declaradas.

// }

// verificar(); 

//---------------------------------------------------


// const datos = Object.freeze({ nombre: 'Luis', edad: 29 });

// datos.edad = 30;

// console.log(datos.edad);

// //freeze impide que se agreguen propiedades por lo que el resultado se mantiene en 29


//--------------------------------------------------------------


// const original = [1, 2, 3];

// const nuevo = original.concat(4);

// console.log(original);

// console.log(nuevo);

// //salida es [1 2 3]
// // y [1 2 3 4]

//-----------------------------------------------------


// const frutas = ['manzana', 'naranja', 'pera', 'mango'];

// const [primera, segunda] = frutas;

// console.log(primera); //manzana

// console.log(segunda); // naranja



//-----------------------------------------------------


// for (let i = 0; i < 3; i++) {

//     for (let i = 0; i < 2; i++) {

//         console.log(i); // 0 1 0 1 0 1

//     }

// }

//------------------------------------------


// const objeto1 = { a: 1, b: 2 };

// const objeto2 = { b: 3, c: 4 };

// const combinado = { ...objeto1, ...objeto2 };

// console.log(combinado); // { a: 1, b: 3, c: 4 }
// // 3 se superpone a b2


//----------------------------------------

// const numeros1 = [1, 2, 3];

// const numeros2 = [3, 4, 5];

// const combinados = [...numeros1, ...numeros2];

// console.log(combinados); // [1, 2, 3, 3, 4, 5]



//------------------------------------------

function demostracion() {

    var nombre = 'Ana';

    let edad = 25;

    if (true) {

        var nombre = 'Luis';

        let edad = 30;

    }

    console.log(nombre); //luis //como es var se modifica

    console.log(edad); //25 // como es let no me deja modificar desde dentro

}

demostracion();