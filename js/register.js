import { showPassword } from "./utils/showPassword.js";
import { validateSignUpPassword } from "./validators/validateSignUpPassword.js";
import { validateRepeatPassword } from "./validators/validateRepeatPassword.js";
import { validateExistingEmail } from "./validators/validateExistingEmail.js";
import { validateEmail } from "./validators/validateEmail.js";
import { setUsuarios } from "./services/setUsuarios.js";
import { redirectLogin } from "./utils/redirectLogin.js"
import { createUser } from "./services/createUser.js";

document.addEventListener("DOMContentLoaded", () => {
    setUsuarios(); 
});

const signUpFormEmail = document.getElementById("emailSignUpInput"); 
const showPasswordButton = document.getElementById("showPasswordBtn");
const signUpFormPasswordInput =  document.getElementById("emailSignUpPassword");
const signUpFormRepeatPassword = document.getElementById("repeatSignUpPassword");
const signUpForm = document.getElementById("signUpForm");

//Muestra el password
showPasswordButton.addEventListener("click", (e) => {
    showPassword(e)
})


//Impide pegar la contraseña 1 y sale una alerta
signUpFormPasswordInput.addEventListener('paste', (e) => {
    e.preventDefault();
    alert("No se permite pegar texto en el campo contraseña");
  });
  
//Impide pegar la contraseña 2 y sale una alerta
signUpFormRepeatPassword.addEventListener('paste', (e) => {
    e.preventDefault();
    alert("No se permite pegar texto en el campo contraseña");
});

/**
 * 
 * @param {string} password Recibe una contraseña
 * @param {string} repeatPassword  Recibe otra contraseña
 * @returns Debe mostrar el feedback de comparación de contraseñas valida o invalida.
 */

const passwordFeedback = (password) =>{
    signUpFormPasswordInput.classList.remove("is-valid")
    signUpFormPasswordInput.classList.remove("is-invalid")

    if (validateSignUpPassword(password)) {
        signUpFormPasswordInput.classList.add("is-valid")
        return true
    }
    else {
        signUpFormPasswordInput.classList.add("is-invalid")
        return false
    }
}

 /**
 * 
 * @param {string} password Recibe una contraseña
 * @param {string} repeatPassword  Recibe otra contraseña
 * @returns Debe mostrar el feedback de comparación de contraseñas valida o invalida segun corresponda.
 */

const repeatPasswordFeedback = (password,repeatPassword) =>{
    signUpFormRepeatPassword.classList.remove("is-valid")
    signUpFormRepeatPassword.classList.remove("is-invalid")

    if (validateRepeatPassword(password,repeatPassword)) {
        signUpFormRepeatPassword.classList.add("is-valid")
        return true
    }
    else{
        signUpFormRepeatPassword.classList.add("is-invalid")
        return false
    }
}

/**
 * 
 * @param {string} email Recibe una contraseña
 * @returns Debe mostrar el feedback de comparación de contraseñas valida o invalida.
 */

const emailFeedback = (email) => {
    signUpFormEmail.classList.remove("is-valid");
    signUpFormEmail.classList.remove("is-invalid");

    if (validateEmail(email) && validateExistingEmail(email)) {
        signUpFormEmail.classList.add("is-valid");
        return true;
    } else {
        signUpFormEmail.classList.add("is-invalid");
        return false;
    }
};

/**
 * 
 * @returns Debe mostrar el modal y redirigir a otra pagina
 */

const showSuccesfulSignUpModal = () =>{
    const modal = new bootstrap.Modal(document.getElementById('succesfulSignupModal'))
    modal.show()
    setTimeout(redirectLogin, 8000)
} 

/**
 * 
 * Valida el formulario y si todo esta OK crea un usuario, abre un modal y redirecciona al Index
 */
const signUpSubmit = (e) => {
    e.preventDefault();

    //Toma los datos de los input
    const email = signUpFormEmail.value;
    const password = signUpFormPasswordInput.value;
    const repeatPassword = signUpFormRepeatPassword.value;

    if (emailFeedback(email) && passwordFeedback(password) && repeatPasswordFeedback(password, repeatPassword)) {

        createUser(email,password); //manda un objeto email+password
        showSuccesfulSignUpModal();
    } else {
        alert("Error en la validación");
    }
}
signUpForm.addEventListener("submit", signUpSubmit);