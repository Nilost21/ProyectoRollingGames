import { limpiarHTML } from '../utils/limpiarHTML.js';
import { obtenerJuegos } from '../utils/obtenerDatos.js';
import mostrarJuegosHTML from './mostrarJuegosHTML.js';
export const inputBusqueda = document.querySelector('#input-busqueda');
export const divBusqueda = document.querySelector('#div-busqueda');
export const tbodyBusqueda = document.querySelector('#tbody-busqueda');
export const liInput = document.querySelector('#li-input');

export const filtroBusqueda = async () => {
  const juegos = await obtenerJuegos();

  let timeoutId;

  inputBusqueda.addEventListener('input', function () {
    const valorBusqueda = inputBusqueda.value.trim().toLowerCase();
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      const juegosFiltrados = juegos.filter((juego) =>
        juego.name.toLowerCase().includes(valorBusqueda)
      );

      if (juegosFiltrados.length > 0 && valorBusqueda !== '') {
        limpiarHTML(inputBusqueda);
        mostrarJuegosHTML(juegosFiltrados);
        console.log(juegosFiltrados);
      } else if (juegosFiltrados.length <= 0) {
        console.log('No hay resultados HTML');
      } else {
        limpiarHTML(liInput);
      }
    }, 1000);
  });
};
