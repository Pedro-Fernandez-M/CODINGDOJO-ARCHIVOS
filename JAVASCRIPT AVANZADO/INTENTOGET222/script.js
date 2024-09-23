async function cargaData(event) {
  event.preventDefault();

  const idProtagonista = document.querySelector("#protagonista").value;
  // console.log(idProtagonista);
  const url = `https://dragonball-api.com/api/characters/${idProtagonista}`;
  const config = { method: "GET" };
  console.log(url);

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    console.log(data);
    const resultadosData = document.querySelector(".resultadosData");
    resultadosData.innerHTML = "";
    resultadosData.innerHTML =
      resultadosData.innerHTML +
      `<div>
    <h1>${data.name}</h1>
    <h2>${data.ki}</h2>
    <h1>${data.race}</h1>
    <img src=${data.image}></img>

  </div>`;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
  }
} //fin

//https://dragonball-api.com/api/characters

// const ejecutar = document.getElementById("btn1");

// ejecutar.addEventListener("click", function() {
//  ingresoBusqueda = document.getElementById("busqueda").value;

// async function getDragonBallData() {
//   var response = await fetch('https://dragonball-api.com/api/characters/${ingresoBusqueda}');
//   var dragonBallData = await response.json();
//   console.log(dragonBallData);

// }

// })

// }
