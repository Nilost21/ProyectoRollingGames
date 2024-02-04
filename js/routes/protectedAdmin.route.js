import { getLoggedUser } from "../services/getLoggedUser.js";
import { redirectIndex } from "../services/redirectIndex.js";

/**
 * 
 * @returns Si no hay usuario logeaedo, o el usuario logeado no es administrador, debe redirigir a la página principal
 */

export const protectedAdminRoute = () =>{
    if(getLoggedUser()?.role !== 'admin') return redirectIndex();
};