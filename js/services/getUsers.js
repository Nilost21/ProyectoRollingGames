/**
 * 
 * @returns Devuelve el arreglo de todos los usuarios alamcenados en el localStorage bajo la key 'usuarios'
 */
export const getUsers = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuarios,"<--getUsers");
    return usuarios;
}