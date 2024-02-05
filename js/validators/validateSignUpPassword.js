import { passwordRegex } from "./passwordRegex.js"
/**
 * 
 * @param {password} password Recibe una contraseña
 * @returns {bool} Devuelve un booleano dependiendo si la contraseña es valida o no.
 */

export const validateSignUpPassword = (password) =>{

    if (passwordRegex.test(password)) { //valida si pasa el patron importado
        return true
    }
    else {
        return false
    }
}