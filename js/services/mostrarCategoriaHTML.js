import { rowCards } from './carruselCategoria.js';
import { limpiarHTML } from '../utils/limpiarHTML.js';
import obtenerJuegoPorClick from '../utils/obtenerJuegoPorID.js';
export const mostrarCategoriaHTML = (juegos) => {
  limpiarHTML(rowCards);
  juegos.forEach((juego, index) => {
    const { name, id, category, price, image1 } = juego;

    const divCategorias = document.createElement('div');
    divCategorias.classList.add(
      'col-12',
      'col-md-4',
      'col-lg-2',
      'p-0',
      'd-flex',
      'flex-sm-grow',
      'justify-content-center',
      'animacion-izquierda-derecha'
    );

    if (index >= juegos.length - 2) {
      divCategorias.classList.remove('d-flex');
      divCategorias.classList.add('d-lg-flex'); // Agrega la clase extra
      divCategorias.classList.add('d-none'); // Agrega la clase extra
    }

    divCategorias.innerHTML = `
      <div id="${id}"
        class="card bg-transparent pt-5 pb-1 ps-5 pe-5 p-lg-0 border-0 mb-3 card-zoom "
        style="width: 18rem"
      >
        <img
          src="${image1}"
          class="card-img-top p-3"
          alt="card-submenu"
        />
        <div class="card-body d-flex flex-column px-0 pt-0">
          <p class="card-text categoria-color fw-bold text-center mb-0">${category}</p>
          <h5 class="card-title text-light fw-bold text-center mb-1 fs-6">
            ${name}
          </h5>
          <p class="card-text categoria-color fw-bold text-center my-1">
            ${price},99 US$
          </p>
          <div class="px-0 text-center mt-2">
            <a href="#" data-id="${id}" class="link-juego btn btn-light fw-bold ps-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-heart-fill mb-1 me-1"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                />
              </svg>
              VER MAS</a
            >
          </div>
        </div>
      </div>
    `;

    rowCards.appendChild(divCategorias);
  });
};
