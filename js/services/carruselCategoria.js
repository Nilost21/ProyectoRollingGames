import { obtenerJuegos } from '../utils/obtenerDatos.js';
import { mostrarCategoriaHTML } from './mostrarCategoriaHTML.js';
export const contenedorCards = document.querySelector('#contenedor-cards');
export const rowCards = document.querySelector('#row-cards');
export const spanCategoria = document.querySelector('#span-categoria');

export const carruselCategoría = async () => {
  const juegos = await obtenerJuegos();
  // Selectores
  const btnIzq = document.querySelector('#btn-izq');
  const btnDer = document.querySelector('#btn-der');

  // Funciones
  let categorias = ['AVENTURA', 'ACCION', 'DEPORTE', 'DESTACADO']; // Lista de categorías
  let currentIndex = 0; // Índice de la categoría actual

  // Seleccionar una categoría aleatoria como la primera
  const indiceAleatorio = Math.floor(Math.random() * categorias.length);
  currentIndex = indiceAleatorio;

  // Evento para cambiar de categoría al presionar el botón izquierdo
  btnIzq.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + categorias.length) % categorias.length;
    mostrarJuegosCategoria(categorias[currentIndex]);
    actualizarCategoria(categorias[currentIndex]);
  });

  // Evento para cambiar de categoría al presionar el botón derecho
  btnDer.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % categorias.length;
    mostrarJuegosCategoria(categorias[currentIndex]);
    actualizarCategoria(categorias[currentIndex]);
  });

  // Función para mostrar los juegos de una categoría dada
  const mostrarJuegosCategoria = (categoria) => {
    let juegosCategoria;

    // Si la categoría es 'ALEATORIA', selecciona 5 juegos aleatorios de otras categorías
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

  // Mostrar la primera categoría seleccionada aleatoriamente
  mostrarJuegosCategoria(categorias[currentIndex]);
  actualizarCategoria(categorias[currentIndex]);
};

// Función para seleccionar juegos aleatorios
const seleccionarJuegosAleatorios = (juegos, cantidad) => {
  const juegosAleatorios = [];
  const copiaJuegos = [...juegos];

  while (juegosAleatorios.length < cantidad && copiaJuegos.length > 0) {
    const indiceAleatorio = Math.floor(Math.random() * copiaJuegos.length);
    juegosAleatorios.push(copiaJuegos.splice(indiceAleatorio, 1)[0]);
  }

  return juegosAleatorios;
};
