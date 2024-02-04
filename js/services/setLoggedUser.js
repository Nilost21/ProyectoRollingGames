import { getUsers } from "./getUsers.js";

/**
 * 
 * @param {string} email Recibe un email
 * @returns Crea una clave en el localStorage llamada 'loggedUser' la cual almacenará el objeto del usuario loggeado
 */
export const setLoggedUser = (email) => {
    const usuarios = getUsers();
    const usuario = usuarios.find(u => u.email == email);

    localStorage.setItem("loggedUser", JSON.stringify(usuario));
}