/**
 * @param {array} juegos Recibe un arreglo de juegos
 * @returns Setea el array en el localStorage bajo la clave 'juegos'.
 */
export const setModifiedJuegos = (juegos) => {
    return localStorage.setItem("juegos", JSON.stringify(juegos));
}