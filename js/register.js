import { showPassword } from "./utils/showPassword.js";
import { validateSignUpPassword } from "./validators/validateSignUpPassword.js";
import { validateRepeatPassword } from "./validators/validateRepeatPassword.js";
import { validateExistingEmail } from "./validators/validateExistingEmail.js";
import { validateEmail } from "./validators/validateEmail.js";
import { setUsuarios } from "./services/setUsuarios.js";
import { redirectIndex } from "./utils/redirectIndex.js"

document.addEventListener("DOMContentLoaded", () => {
    // NAVBAR
    setUsuarios(); 
    // FOOTER
});

const signUpFormEmail = document.getElementById("emailSignUpInput"); 
const showPasswordButton = document.getElementById("showPasswordBtn");
const signUpFormPasswordInput =  document.getElementById("emailSignUpPassword");
const signUpFormRepeatPassword = document.getElementById("repeatSignUpPassword");
const signUpForm = document.getElementById("signUpForm");

//DOCUMENTAR: mostrar el password
showPasswordButton.addEventListener("click", (e) => {
    showPassword(e)
})


//DOCUMENTAR: no se pega contraseña 1 y sale una alerta
signUpFormPasswordInput.addEventListener('paste', (e) => {
    e.preventDefault();
    alert("No se permite pegar texto en el campo contraseña");
  });
  
//DOCUMENTAR: no se pega contraseña 2 y sale una alerta
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
    signUpFormPasswordInput.classList.remove("is-valid") //limpia estado
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


//TEST para validar email valido/invalido
const signUpSubmit = (e) => {
    e.preventDefault();

    const mail = document.getElementById("emailSignUpInput").value;

    if (emailFeedback(mail)) {
    }
}

/*
signUpFormEmail.addEventListener("input", (e) => {
    const mail = e.target.value;
    emailFeedback(mail);
}); 
*/

signUpForm.addEventListener("submit", signUpSubmit);
