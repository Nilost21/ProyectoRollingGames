import { filtroBusqueda } from './services/filtroBusqueda.js';
import { carruselCategoría } from './services/carruselCategoria.js';
import { seleccionPrincipal } from './services/seleccionPrincipal.js';

document.addEventListener('DOMContentLoaded', () => {
  filtroBusqueda();
  carruselCategoría();
  // seleccionPrincipal();
});
