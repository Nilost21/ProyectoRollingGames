import { showPassword } from "./utils/showPassword.js";
import { validateSignUpPassword } from "./validators/validateSignUpPassword.js";
import { validateRepeatPassword } from "./validators/validateRepeatPassword.js";
import { validateEmail } from "./validators/validateEmail.js";
import { setUsuarios } from "./services/setUsuarios.js";

document.addEventListener("DOMContentLoaded", () => {
    // NAVBAR
    setUsuarios(); 
    // FOOTER
});

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




//TEST para validar contraseñas iguales
const signUpSubmit = (e) => {
    e.preventDefault();

    const testPassword = document.getElementById("emailSignUpPassword").value
    const testPassword2 = document.getElementById("repeatSignUpPassword").value

    repeatPasswordFeedback(testPassword,testPassword2)
    
}

signUpForm.addEventListener("submit", signUpSubmit);