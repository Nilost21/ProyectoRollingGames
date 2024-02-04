import { obtenerJuegos } from '../utils/obtenerDatos.js';
import obtenerJuegoPorClick from '../utils/obtenerJuegoPorID.js';
import { mostrarCategoriaHTML } from './mostrarCategoriaHTML.js';
export const contenedorCards = document.querySelector('#contenedor-cards');
export const rowCards = document.querySelector('#row-cards');
export const spanCategoria = document.querySelector('#span-categoria');

export const carruselCategoría = async () => {
  const juegos = await obtenerJuegos();

  const btnIzq = document.querySelector('#btn-izq');
  const btnDer = document.querySelector('#btn-der');

  let categorias = ['AVENTURA', 'ACCION', 'DEPORTE', 'DESTACADO'];
  let currentIndex = 0;

  const indiceAleatorio = Math.floor(Math.random() * categorias.length);
  currentIndex = indiceAleatorio;

  btnIzq.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + categorias.length) % categorias.length;
    mostrarJuegosCategoria(categorias[currentIndex]);
    actualizarCategoria(categorias[currentIndex]);
  });

  btnDer.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % categorias.length;
    mostrarJuegosCategoria(categorias[currentIndex]);
    actualizarCategoria(categorias[currentIndex]);
  });

  const mostrarJuegosCategoria = (categoria) => {
    let juegosCategoria;

    if (categoria === 'ALEATORIA') {
      const juegosOtrasCategorias = juegos.filter(
        (juego) => !categorias.includes(juego.category)
      );
      juegosCategoria = seleccionarJuegosAleatorios(juegosOtrasCategorias, 5);
    } else {
      juegosCategoria = juegos
        .filter((juego) => juego.category === categoria)
        .slice(0, 5);
    }

    mostrarCategoriaHTML(juegosCategoria);
  };

  const actualizarCategoria = (categoria) => {
    spanCategoria.textContent = categoria;

    spanCategoria.classList.add('animacion-izquierda-derecha');
    setTimeout(() => {
      spanCategoria.classList.remove('animacion-izquierda-derecha');
    }, 2000);
  };

  mostrarJuegosCategoria(categorias[currentIndex]);
  actualizarCategoria(categorias[currentIndex]);
};

const seleccionarJuegosAleatorios = (juegos, cantidad) => {
  const juegosAleatorios = [];
  const copiaJuegos = [...juegos];

  while (juegosAleatorios.length < cantidad && copiaJuegos.length > 0) {
    const indiceAleatorio = Math.floor(Math.random() * copiaJuegos.length);
    juegosAleatorios.push(copiaJuegos.splice(indiceAleatorio, 1)[0]);
  }

  return juegosAleatorios;
};
