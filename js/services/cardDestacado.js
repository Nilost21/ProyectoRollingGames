export const cardDestacado = (destacados) => {
  destacados.forEach((juego, index) => {
    const colCardPrincipal = document.querySelector('#col-card-principal');
    const cardsDestacadas = document.querySelector('#cardsDestacados');


    
    if (index === 0) {
      const { name, category, id, price, description, image1, image2, video2 } =
        juego;

      const CardPrincipal = document.createElement('div');
      CardPrincipal.classList.add('card', 'bg-transparent', 'rounded-5');
      CardPrincipal.innerHTML = `
              <img src="${image2}" class="card-img rounded-5 sombra-difuminada animacion-principal " alt="imagen-portada"/>
              <div class="card-img-overlay p-2 d-flex flex-column justify-content-between justify-content-md-around">
                <div class="text-center text-md-start ms-md-3 mt-2 mb-5 mt-md-5">
                  <img src="${video2}" alt="logo-Prince-of-Persia" class="img-fluid w-25 animacion-izquierda-derecha"/>
                </div>
                <div class="row mb-md-3 ps-md-3">
                  <div class="p-0">
                    <p class=" card-text fw-bold text-light mt-md-5 mt-1 text-center text-md-start  mb-md-0 ps-md-4 mb-md-1">${category}</p>
                    <p class=" animacion-izquierda-derecha col-lg-3 col-md-5 card-text fw-bold text-light text-center text-sm-start mb-2 d-none d-md-grid ps-md-3 mb-md-3 fs-6">
                      ${description}
                    </p>
                  </div>
                  <div class=" text-center text-md-start mb-5  ps-md-4">
                    <a href="#" class="btn btn-light fw-bold fs-6 pb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill pt-1 mb-2" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                      </svg>
                      VER MAS
                    </a>
                  </div>
                </div>
              </div>
          `;

      colCardPrincipal.appendChild(CardPrincipal);
    }
  });
};
