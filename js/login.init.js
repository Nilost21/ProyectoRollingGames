// IMPORTAR NAVBAR
import { showPassword } from "./utils/showPassword.js";
import { setLoggedUser } from "./services/setLoggedUser.js";


document.addEventListener("DOMContentLoaded", ()=>{
    //CARGAR NAVBAR
});

const loginForm = document.getElementById("login_form");
const showPasswordBtn = document.getElementById("showPasswordBtn");
const invalidLoginFeedback = document.getElementById("login_feedback_invalido");

showPasswordBtn.addEventListener("click", (e) => {
    showPassword(e);
});


const feedback = (bool) => {
    invalidLoginFeedback.classList.add("hidden");

    if(bool){
        return invalidLoginFeedback.classList.add("hidden");
    } else {
        return invalidLoginFeedback.classList.remove("hidden");
    }
}


const userLogin = (e) => {
    e.preventDefault();

    const datosDeFormulario = Object.fromEntries(new FormData(e.target));

    if(validateLoginUser({email: datosDeFormulario.email, password: datosDeFormulario.password})){
        feedback(true);
        setLoggedUser(datosDeFormulario.email);
        setTimeout()
        return;
    }
    return feedback(false);
}

loginForm.addEventListener("submit", userLogin);