import { formatearFechaLegible, tiempoRelativo, formatoCompleto, formatoCorto } from './utils/formatearFecha.js';
import chalk from 'chalk';

fechas.forEach(fecha => {
    console.log(chalk.blue(formatearFechaLegible(fecha)));
    console.log(chalk.green(tiempoRelativo(fecha)));
    console.log(chalk.yellow(formatoCompleto(fecha)));
    console.log(chalk.red(formatoCorto(fecha)));
    console.log('------------------------');
});



const fechas = [
    '2023-01-01T12:34:56Z',
    '2022-12-15T15:30:00Z',
    '2021-05-05T08:00:00Z',
    '2020-04-28T20:15:45Z',
    '2019-09-10T09:00:00Z'
];

fechas.forEach(fecha => {
    console.log(formatearFechaLegible(fecha));
    console.log(tiempoRelativo(fecha));
    console.log(formatoCompleto(fecha));
    console.log(formatoCorto(fecha));
    console.log('------------------------');
});
