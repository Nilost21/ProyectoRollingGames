import { limpiarHTML } from '../utils/limpiarHTML.js';
const divColDestacados = document.querySelector('#col-destacados');
const rowDestacadosPrincipal = document.querySelector('#row-principal');

export const mostrarDestacadosHTML = (destacados) => {
  destacados.forEach((juego) => {
    const { name, category, id, price, description, image1, image2, video2 } =
      juego;

    console.log(destacados);
    const palabraCapitalizada = capitalizarPrimeraLetra(name);

    const rowDestacados = document.createElement('div');
    rowDestacados.classList.add('row', 'px-4');

    rowDestacados.innerHTML = `
  
  <a id="${id}" href="#" class="card border-0 bg-transparent py-0 ps-1 pe-0 text-light rounded-4 card-zoom text-decoration-none"
      style="max-width: 540px"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="${image1}"
            class="img-fluid rounded-4 border-0 ps-2 py-2 pe-1 sombreado"
            alt="..."
          />
        </div>
        <div class="col-md-8 text-start mt-xxl-3 mt-xl-2 p-1">
          <div class="card-body p-0">
            <p
              class="card-text ms-xl-3 fw-bold d-flex flex-column text-center"
            >
            ${palabraCapitalizada}
            </p>
          </div>
        </div>
      </div>
    </a>
  
  `;

    divColDestacados.appendChild(rowDestacados);
  });
};

function capitalizarPrimeraLetra(palabra) {
  if (typeof palabra !== 'string' || palabra.length === 0) {
    return palabra;
  }

  const palabras = palabra.split(' ');

  const palabrasCapitalizadas = palabras.map((palabra) => {
    if (palabra.length === 0) {
      return palabra;
    }
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });

  return palabrasCapitalizadas.join(' ');
}
