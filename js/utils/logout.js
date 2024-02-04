/**
 * @returns {} Deslogea al usuario de la página y la recarga.
 */

export const logout = () =>{
    localStorage.removeItem('loggedUser');
    location.reload();
 }