import faker from "faker";

const generarCancion = () => ({
  id: faker.datatype.uuid(),
  titulo: faker.music.songName(),
  artista: faker.name.findName(),
  album: faker.music.genre(),
  duracion: faker.datatype.number({ min: 120, max: 300 }), // Duración en segundos
  genero: faker.music.genre(),
  fechaLanzamiento: faker.date.past(20).toISOString().split("T")[0], // Fecha en formato YYYY-MM-DD
});

const generarPlaylist = () => ({
  idPlaylist: faker.datatype.uuid(),
  nombre: faker.lorem.words(3),
  descripcion: faker.lorem.sentence(),
  canciones: Array.from({ length: 10 }, generarCancion),
  creador: faker.name.findName(),
  fechaCreacion: faker.date.past(5).toISOString().split("T")[0], // Fecha en formato YYYY-MM-DD
});

const obtenerCancion = (req, res) => {
  const cancion = generarCancion();
  res.json(cancion);
};

const obtenerPlaylist = (req, res) => {
  const playlist = generarPlaylist();
  res.json(playlist);
};

module.exports = {
  obtenerCancion,
  obtenerPlaylist,
};
