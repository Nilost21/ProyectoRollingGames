import { showPassword } from "./utils/showPassword.js";
import { validateRepeatPassword } from "./validators/validateRepeatPassword.js";
import { validateSignUpPassword } from "./validators/validateSignUpPassword.js";

const showPasswordButton = document.getElementById("showPasswordBtn")
const signUpFormPasswordInput =  document.getElementById("emailSignUpPassword")
const signUpFormRepeatPassword = document.getElementById("repeatSignUpPassword") //segundo password
const signUpForm = document.getElementById("signUpForm")

//DOCUMENTAR: mostrar el password
showPasswordButton.addEventListener("click", (e)=>{
    showPassword(e)
})

//DOCUMENTAR: no se pega contraseña 1 y sale una alerta
signUpFormPasswordInput.addEventListener('paste', (e) => {
    e.preventDefault();
    alert("No se permite pegar texto en en el campo contraseña");
  });
  
//DOCUMENTAR: no se pega contraseña 2 y sale una alerta
signUpFormRepeatPassword.addEventListener('paste', (e) => {
    e.preventDefault();
    alert("No se permite pegar texto en en el campo contraseña");
});


/**
 * 
 * @param {string} password Recibe una contraseña
 * @param {string} repeatPassword  Recibe otra contraseña
 * @returns Debe mostrar el feedback de comparación de contraseñas valida o invalida segun corresponda.
 */


const signUpSubmit = (e) =>{
    e.preventDefault()
}

signUpForm.addEventListener("submit", signUpSubmit)