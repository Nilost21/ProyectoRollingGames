import { limpiarHTML } from '../../utils/limpiarHTML.js';
import obtenerJuegoPorID from '../../utils/obtenerJuegoPorID.js';

const juegoObtenidoHTML = (juego) => {
  const { name, video1, price, category, image1, description } = juego;
  const contenedorGame = document.querySelector('#contenedor-video-game');
  limpiarHTML(contenedorGame);

  const rowTitulo = document.createElement('div');
  rowTitulo.classList.add('row', 'p-0');
  rowTitulo.innerHTML = `<h1 class="col-12 mb-4 fw-bold fs-2 mt-1 ms-lg-5 mt-lg-3">${name}</h1>`;

  const rowContenido = document.createElement('div');
  rowContenido.classList.add(
    'row',
    'p-0',
    'mt-3',
    'animacion-izquierda-derecha'
  );
  rowContenido.innerHTML = `
  <div
            class="col-lg-9 col-md-7 col-12 d-flex pe-2 ps-3 d-flex flex-row justify-content-center "
          >
            <iframe
              width="900"
              height="525"
              src="${video1}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              allowfullscreen
              class="autoplay rounded-4"
            ></iframe>
          </div>
          <div
            class="col-lg-3 col-md-6 col-sm-12 px-0 d-flex flex-row justify-content-center"
          >
            <div
              class="card pt-5 bg-transparent p-lg-0 border-0"
              style="width: 18rem"
            >
              <img
                src="${image1}"
                class="card-img-top"
                alt="card-submenu rounded-5"
              />
              <div class="card-body d-flex flex-column px-0 pt-0 pb-1">
                <p
                  class="card-text categoria-color fw-bold text-center mb-0 mt-2"
                >
                  ${category}
                </p>
                <h5 class="card-title text-light fw-bold text-center mb-1 fs-6 ms-0 mt-2">
                    ${name}
                </h5>
                <p class="card-text categoria-color fw-bold text-center my-1">
                  ${price},99 US$
                </p>
                <div class="px-0 text-center mt-1">
                  <a
                    href="#"
                    class="link-juego btn btn-light fw-bold ps-1 pe-1 mb-3"
                  >
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
                    COMPRAR</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
          <h1 class="text-center text-md-start mb-1 fw-bold fs-4 mt-1 ms-lg-5 mt-lg-3">${name}</h1>
          </div>
          <div class="col-12 col-md-6 col-lg-8">
          <h6 class="text-center mb-4 text-light text-md-start fs-5 mt-1 ms-lg-5 mt-lg-3 pe-0 ms-2 ms-md-0">${description}</h6>
          </div>
  `;

  contenedorGame.appendChild(rowContenido);
};

export default juegoObtenidoHTML;
