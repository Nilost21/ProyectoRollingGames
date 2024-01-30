import { obtenerJuegos } from '../utils/obtenerDatos.js';

export const seleccionPrincipal = async () => {
  const juegos = await obtenerJuegos();

  console.log(juegos);
};
