import juegoObtenidoHTML from './components/gameInfo/juegoObtenidoHTML.js';
import { obtenerJuegos } from './utils/obtenerDatos.js';

async function obtenerJuegoPorIdUrl() {
  const juegosDestacados = await obtenerJuegos();
  const urlActual = window.location.href;

  const urlParams = new URLSearchParams(new URL(urlActual).search);
  const idJuego = urlParams.get('id');

  const juegoEncontrado = juegosDestacados.find(
    (juego) => juego.id === idJuego
  );

  console.log(juegoEncontrado);
  juegoObtenidoHTML(juegoEncontrado);
}

export default obtenerJuegoPorIdUrl();
