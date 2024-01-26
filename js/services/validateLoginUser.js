import { getUsers } from "./getUsers.js"

export const validateLoginUser = ({email, password}) => {
    const usuarios = getUsers();
    const encontrado = usuarios.find(u => u.email == email);
    const matchContraseña = encontrado?.password == password;

    return encontrado && matchContraseña;
}