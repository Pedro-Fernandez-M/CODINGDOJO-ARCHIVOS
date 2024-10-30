import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import "dayjs/locale/es.js";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale("es");

export function formatearFechaISO(isoDate) {
  return dayjs(isoDate).format("D [de] MMMM [de] YYYY, h:mm:ss A [UTC]");
}

export function haceCuanto(isoDate) {
  return dayjs(isoDate).fromNow();
}

export function formatoDiaCompleto(isoDate) {
  return dayjs(isoDate).format("dddd, D [de] MMMM [de] YYYY");
}

export function formatoCorto(isoDate) {
  return dayjs(isoDate).format("MM/DD/YYYY");
}
