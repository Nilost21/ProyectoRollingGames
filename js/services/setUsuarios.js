import usuariosDB  from "../database/usuarios.json" assert {type: "json"};

/**
 * 
 * Carga los datos de un archivo Json en el localStorage
 */
export const setUsuarios = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || null;
    if(!usuarios || usuarios?.length == 0){
        localStorage.setItem("usuarios", JSON.stringify(usuariosDB));
    }
};