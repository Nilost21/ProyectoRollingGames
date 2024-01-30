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
    const juegosCategoria = juegos
      .filter((juego) => juego.category === categoria)
      .slice(0, 5);
    console.log(juegosCategoria);
    mostrarCategoriaHTML(juegosCategoria);
  };

  const actualizarCategoria = (categoria) => {
    spanCategoria.textContent = categoria;

    spanCategoria.classList.add('animacion-izquierda-derecha');
    setTimeout(() => {
      spanCategoria.classList.remove('animacion-izquierda-derecha');
    }, 2000);
  };
};
