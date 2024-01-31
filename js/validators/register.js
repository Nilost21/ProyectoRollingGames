import { showPassword } from "../utils/showPassword.js";
import { validateRepeatPassword } from "./validateRepeatPassword.js";

const showPasswordButton = document.getElementById("showPasswordBtn")
const signUpFormRepeatPassword = document.getElementById("repeatSignUpPassword")

showPasswordButton.addEventListener("click", (e)=>{
    showPassword(e)
})

signUpFormRepeatPassword.addEventListener('paste', (e) => {
    e.preventDefault();

    const repeatPasswordValue = signUpFormRepeatPassword.value; //obtiene lo escrito en password
    const pastedValue = e.clipboardData.getData('text'); //obtiene lo copiado en memoria
    const repeatedPasswordValid = validateRepeatPassword(repeatPasswordValue, pastedValue); //usa el metodo validateRepeatPassword
});