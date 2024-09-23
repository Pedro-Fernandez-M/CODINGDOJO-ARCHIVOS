const alterego = {
    nombre: 'Diana',
    apellido: 'Prince',
    email: 'diana.prince@themyscira.com',
    contraseña: 'Am@z0nW@rri0r',
    usuario: 'wonderwoman',
    direcciones: [
      {
        direccion: 'Themyscira Palace',
        ciudad: 'Themyscira',
        codigoPostal: '0001'
      },
      {
        direccion: '7000 Hollywood Blvd',
        ciudad: 'Los Angeles',
        codigoPostal: '90028'
      }
    ],
    creadoEn: 1714866113353
  };
// const {nombre, usuario, direcciones:[0].ciudad, direcciones:[1].ciudad} = alterego;

const {nombre, usuario, direcciones:[{ciudad:ciudad1, direccion: manzana1}, {ciudad:ciudad2 , direccion: manzana2}]} = alterego;


console.log(nombre, usuario, ciudad1, ciudad2, manzana1, manzana2);



