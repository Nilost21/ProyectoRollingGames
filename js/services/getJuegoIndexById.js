import { getJuegos } from "./getJuegos.js";

/**
 * @param {string} id Recibe el Id de un juego
 * @returns Devuelve el indice en el arreglo de productos del localStorage del elemento que coincida con el id recibido por parámetro.
 */
export const getJuegoIndexById = (id) => {
    const juegos = getJuegos();
    return juegos.findIndex(juego => juego.id == id);
};