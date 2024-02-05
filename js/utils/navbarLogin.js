import { limpiarHTML } from './limpiarHTML.js';
import { renderCartBody } from '../cart.init.js';
import { getLoggedUser } from '../services/getLoggedUser.js';
import { logout } from '../utils/logout.js';

export function navbarLogin() {
  const navbarRow = document.querySelector('#navbar-row');
  limpiarHTML(navbarRow);
  const navbarLogueado = document.createElement('nav');
  navbarLogueado.classList.add(
    'navbar',
    'navbar-expand-lg',
    'bg-navbar',
    'p-0'
  );

  navbarLogueado.dataset.id = 'navbar-logeado';
  navbarLogueado.innerHTML = `
  <button
            class="navbar-toggler text-light bg-light ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-light"></span>
          </button>
          <a class="navbar-brand  ps-4 py-lg-2" href="#">
            <img src="/assets/admin-logo.png" alt="logo-web" class="" height="40">
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link categoria-color fw-bold ms-2 "
                  aria-current="page"
                  href="#"
                  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill mb-1 me-2" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                  </svg> Inicio</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold categoria-color ms-2" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-1 me-1 bi bi-cart-fill" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg> Tienda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold categoria-color ms-2" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-1 me-1 bi bi-people-fill" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg> Nosotros</a>
              </li>
            </ul>
            <div class="p-1">
              <a href="index.html" class="btn bg-dark text-light fw-bold rounded-5 border-0 ">Logout</a>
            </div>
            <div class="p-1">
              <a href="/views/admin.html" class="btn bg-light text-dark fw-bold rounded-5 me-1 border-0 ">Admin</a>
            </div>
           <div class="pe-3 pt-2 ">
            <a href="#" class="text-secondary btn-navbar rounded-5 pt-1 ms-3 d-none d-md-flex flex-row justify-content-center mb-md-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person mb-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                />
              </svg>
            </a>
           </div>
          </div>
  `;

  navbarRow.appendChild(navbarLogueado);
  //   cambiarURL(user);
}
