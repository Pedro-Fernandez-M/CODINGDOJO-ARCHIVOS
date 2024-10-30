import express from "express";
import { faker, simpleFaker } from "@faker-js/faker";

const main = async () => {
  const app = express();
  const port = 4000;
  app.get("/", (req, res) => {
    const songs = [];
    for (let i = 0; i < 10; i++) {
      songs.push({
        id: i,
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        genero: faker.music.genre(),
        duracion:
          simpleFaker.number.int({ min: 1, max: 10 }) +
          ":" +
          simpleFaker.number.int({ min: 1, max: 59 }),
        fecha: simpleFaker.date.past(),
      });
    }
    res.json(songs);
  });

  app.get("/playlist", (req, res) => {
    const playlist = [];
    for (let i = 0; i < 10; i++) {
      playlist.push({
        id: i,
        creador: faker.person.fullName(),
        descripcion: faker.lorem.text(),
        canciones: faker.music.album(),
        creador: faker.person.jobType(),
        fecha: simpleFaker.date.past(),
      });
    }
    res.json(playlist);
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
main();
