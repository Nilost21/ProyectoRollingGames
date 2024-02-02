import { obtenerJuegos } from './obtenerDatos.js';

async function obtenerJuegoPorID() {
  const juegos = await obtenerJuegos();

  const botonesLink = document.querySelectorAll('.link-juego');

  botonesLink.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      e.preventDefault();

      const idJuego = e.target.dataset.id;

      const juegoObtenido = juegos.filter((juego) => juego.id === idJuego);

      if (juegoObtenido.length > 0) {
        return console.log(juegoObtenido[0]);
      } else {
        console.log('No se encontró ningún juego con el ID:', idJuego);
      }
    });
  });
}

export default obtenerJuegoPorID;
