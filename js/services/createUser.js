import { Usuario } from "../classes/usuario.class.js";

export const createUser = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("Usuarios"));
    const newUser = new Usuario({ email: email, password: password,role: "user", status: "pendiente"});
    users.push(newUser);
    localStorage.setItem("Usuarios", JSON.stringify(users));
  }; 
  