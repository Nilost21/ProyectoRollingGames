import { getUsers } from "./getUsers.js";

export const getUsuarioIndexById = (id) => {
    const usuarios = getUsers();
    return usuarios.findIndex(usuario => usuario.id == id);
}