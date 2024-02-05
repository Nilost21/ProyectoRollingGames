import { filtroBusqueda } from './services/filtroBusqueda.js';
import { carruselCategoría } from './services/carruselCategoria.js';
import { seleccionPrincipal } from './services/seleccionPrincipal.js';
import juegosGratis from './services/juegosGratis.js';
import obtenerJuegoPorID from './utils/obtenerJuegoPorID.js';

document.addEventListener('DOMContentLoaded', () => {
  seleccionPrincipal();
  filtroBusqueda();
  carruselCategoría();
  juegosGratis();
});
