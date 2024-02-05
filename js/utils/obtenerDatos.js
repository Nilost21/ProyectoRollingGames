export const obtenerJuegos = async () => {
  try {
    const url = '/js/database/juegos.json';

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const juegos = resultado;
    return juegos;
  } catch (error) {
    console.log('Sucedió un error y no se pudieron obtener los Juegos');
  }
};

export const obtenerUsuarios = async () => {
  try {
    const url = '/js/database/usuarios.json';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log('Sucedió un error y no se pudieron obtener los Usuarios');
  }
};
