import {
  formatearFechaISO,
  haceCuanto,
  formatoDiaCompleto,
  formatoCorto,
} from "./utils/formatearFecha.js";
import chalk from "chalk";

const fechas = [
  "2023-01-01T12:34:56Z",
  "2024-04-21T09:40:26+0000",
  "2022-07-15T08:30:00Z",
  "2021-11-11T11:11:11Z",
  "2020-05-05T05:05:05Z",
];

fechas.forEach((fecha) => {
  console.log(chalk.blue(`Fecha ISO: ${fecha}`));
  console.log(chalk.green(`Formato legible: ${formatearFechaISO(fecha)}`));
  console.log(chalk.yellow(`Hace cuanto: ${haceCuanto(fecha)}`));
  console.log(
    chalk.magenta(`Formato día completo: ${formatoDiaCompleto(fecha)}`)
  );
  console.log(chalk.cyan(`Formato corto: ${formatoCorto(fecha)}`));
  console.log("-----------------------------------");
});
