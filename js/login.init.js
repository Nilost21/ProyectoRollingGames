// IMPORTAR NAVBAR
import { showPassword } from "./utils/showPassword.js";


document.addEventListener("DOMContentLoaded", ()=>{
    //CARGAR NAVBAR
});

const loginForm = document.getElementById("login_form");
const showPasswordBtn = document.getElementById("showPasswordBtn");
const invalidLoginFeedback = document.getElementById("login_feedback_invalido");

showPasswordBtn.addEventListener("click", (e) => {
    showPassword(e);
});