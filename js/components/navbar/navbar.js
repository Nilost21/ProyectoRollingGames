import { obtenerUsuarios } from '../../utils/obtenerDatos.js';

export const llamarNavbar = async () => {
  const usuarios = await obtenerUsuarios();
  console.log(usuarios);

  let logueado = false;

  if (logueado) {
    return mostrarNavbarLogin();
  } 
};
