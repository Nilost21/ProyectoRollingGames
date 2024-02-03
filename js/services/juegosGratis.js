import { obtenerJuegos } from '../utils/obtenerDatos.js';
import obtenerJuegoPorID from '../utils/obtenerJuegoPorID.js';
const rowJuegosGratis = document.querySelector('#row-juego-gratis');

const juegosGratis = async () => {
  const juegos = await obtenerJuegos();

  const juegosGratis = juegos.filter((juego) => juego.category === 'GRATIS');

  juegosGratis.forEach((juego) => {
    const { name, category, video1, id, description, image2 } = juego;

    const colJuegoGratis = document.createElement('div');
    colJuegoGratis.classList.add('col-12', 'col-md-6', 'mb-5');

    colJuegoGratis.innerHTML = `
    <div class="card bg-transparent border-0 card-zoom px-4 px-md-0">
    <img
      src="${image2}"
      class="card-img"
      alt="juegoGratis"
    />
    <div
      class="card-img-overlay mb-5 ps-5 d-flex flex-column justify-content-end"
    >
     </div>
     <p class="card-text categoria-color fw-bold mt-xl-2 ps-xl-2 mb-xl-0 mt-3 mb-1 ">
      JUEGA GRATIS
    </p>
    <h5 class="card-text fw-bold text-light fs-5 ps-xl-2 ">
    ${name}
    </h5>
    <p class="card-text categoria-color fw-bold mt-xl-0 ps-xl-2 mb-xl-1 ">
      ${description}
    </p>
    <div class="ms-xl-1 mt-xl-1">
      <a href="#" data-id="${id}" class="link-juego btn btn-light fw-bold fs-6 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down-fill mb-1" viewBox="0 0 16 16">
          <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"/>
        </svg>
        DESCARGAR</a
      >
    </div>
  </div>
    `;

    rowJuegosGratis.appendChild(colJuegoGratis);
  });
};

export default juegosGratis;
