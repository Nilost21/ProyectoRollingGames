/**
 * 
 * @param {array} usuarios Recibe un arreglo de usuarios.
 * @returns Setea el array en el localStorage con la clave 'usuarios'.
 */
export const setModifiedUsuarios = (usuarios) => {
    return localStorage.setItem("usuarios", JSON.stringify(usuarios));
}