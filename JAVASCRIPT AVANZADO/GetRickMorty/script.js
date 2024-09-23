async function cargaData(event) {
  event.preventDefault();

  // const url = "https://rickandmortyapi.com/api/character";

  const idPersonaje = document.querySelector("#personaje").value;
  console.log(idPersonaje);
  const url = `https://rickandmortyapi.com/api/character/${idPersonaje}`;
  const config = {
    method: "GET",
  };

  try {
    const response = await axios.post(url);
    // const data = await response.json();
    const { data } = response;
    console.log(data);

    const conteiner = document.querySelector("#resultado");

    conteiner.innerHTML = "";
    conteiner.innerHTML =
      conteiner.innerHTML +
      `<div> <h1>${data.name}</h1>
          <img src=${data.image}></img>
          <h1>${data.origin.name}</h1>
      </div>`;
  } catch (error) {
    const conteiner = document.querySelector("#resultado");
    console.log(error);
    conteiner.innerHTML = "";
    conteiner.innerHTML =
      conteiner.innerHTML +
      `<div> <h1>${error.message}</h1>

      </div>`;
  }

  // for (let i = 0; i < data.results.length; i++) {
  //   conteiner.innerHTML =
  //     conteiner.innerHTML +
  //     `<div>
  //     <h1>${data.name}</h1>
  //             <img src=${data.results[i].image}></img>
  //        </div>`;
  // }
}
