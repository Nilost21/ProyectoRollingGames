import { Usuario } from "../classes/usuario.class.js";
import { generateUniqueId } from "../utils/generateIds.js";

export const createUser = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("usuarios"));
    const newUser = new Usuario({
          id: generateUniqueId(),
          email: email,
          image1: "",
          image2: "",
          password: password,
          role: "user", 
          status: "pendiente",
        });
    users.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(users));
  };