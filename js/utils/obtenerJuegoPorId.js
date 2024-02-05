import { limpiarHTML } from './limpiarHTML.js';
import { obtenerJuegos } from './obtenerDatos.js';
import juegoObtenidoHTML from '../components/gameInfo/juegoObtenidoHTML.js';

async function obtenerJuegoPorID() {
  const juegos = await obtenerJuegos();

  const botonesLink = document.querySelectorAll('.link-juego');

  botonesLink.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      e.preventDefault();
      const idJuego = e.target.dataset.id;
      const juegoObtenido = juegos.find((juego) => juego.id === idJuego);

      const url = `views/game.html?id=${juegoObtenido.id}&nombre=${juegoObtenido.name}`;

      window.location.href = url;
    });
  });
}

export default obtenerJuegoPorID;
