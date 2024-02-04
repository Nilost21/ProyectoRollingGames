/**
 * 
 * @returns Devuelve el usuario almacenado con la key "loggedUser"
 */


export const getLoggedUser = () =>{
    return JSON.parse(localStorage.getItem('loggedUser')); ///// Podria retornar false
 }