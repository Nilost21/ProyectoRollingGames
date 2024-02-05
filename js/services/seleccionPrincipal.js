import { obtenerJuegos } from '../utils/obtenerDatos.js';
import { cardDestacado } from './cardDestacado.js';
import { mostrarDestacadosHTML } from './mostrarDestacadosHTML.js';
import obtenerJuegoPorID from '../utils/obtenerJuegoPorID.js';

export const seleccionPrincipal = async () => {
  const juegos = await obtenerJuegos();

  const destacados = juegos
    .filter((juego) => juego.category === 'DESTACADO')
    .slice(0, 5);

  cardDestacado(destacados);
  mostrarDestacadosHTML(destacados);
  obtenerJuegoPorID();
};
