import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

// Función para formatear fecha ISO
export const formatearFechaLegible = (fechaISO) => {
    return dayjs(fechaISO).format('DD [de] MMMM [de] YYYY, hh:mm:ss A [UTC]');
};

// Función para mostrar "hace X tiempo"
export const tiempoRelativo = (fechaISO) => {
    return dayjs(fechaISO).fromNow();
};

// Función para mostrar "día, DD de mes de YYYY"
export const formatoCompleto = (fechaISO) => {
    return dayjs(fechaISO).format('dddd, DD [de] MMMM [de] YYYY');
};

// Función para mostrar "MM/DD/YYYY"
export const formatoCorto = (fechaISO) => {
    return dayjs(fechaISO).format('MM/DD/YYYY');
};
