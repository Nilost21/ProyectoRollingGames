import { getUsers } from "./getUsers.js";
import { getUsuarioIndexById } from "./getUsuarioIndexById.js";
import { setModifiedUsuarios } from "./setModifiedUsuarios.js";

export const removeUsuario = (id) => {
    const usuarios = getUsers();
    const index = getUsuarioIndexById();
    usuarios.splice(index,1);
    setModifiedUsuarios(usuarios);
}