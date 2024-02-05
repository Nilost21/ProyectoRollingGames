/**
 * 
 * @param {email} email Recibe un email 
 * @returns {bool} Devuelve un booleano dependiendo de si el email ya esta registrado o no. 
 */

export const validateExistingEmail = (email) => {
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const foundUserEmail = users.find((user) => user.email === email);

    return !foundUserEmail; // Devuelve true si el email no esta en uso y false si ya existe.
};
