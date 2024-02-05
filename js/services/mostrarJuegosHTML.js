import {
  divBusqueda,
  inputBusqueda,
  tbodyBusqueda,
  liInput,
} from './filtroBusqueda.js';
import { limpiarHTML } from '../utils/limpiarHTML.js';

export default function mostrarJuegosHTML(juegos) {
  juegos.forEach((juego) => {
    limpiarHTML(inputBusqueda);
    const { name, image1 } = juego;

    const liName = document.createElement('li');
    liName.innerHTML = `<li class="row px-4 position-absolute mt-2 text-center text-light fw-bold">
<a class="text-decoration-none text-light">
<p>${name}</p>
</a>
  </li>`;

    liInput.appendChild(liName);
  });
}
