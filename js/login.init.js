// IMPORTAR NAVBAR
import { showPassword } from "./utils/showPassword.js";
import { setLoggedUser } from "./services/setLoggedUser.js";
import { validateLoginUser } from "./services/validateLoginUser.js";
import { redirectIndex } from "./services/redirectIndex.js";
import { getUsers } from "./services/getUsers.js";
import { setUsuarios } from "./services/setUsuarios.js";

document.addEventListener("DOMContentLoaded", ()=>{
    //CARGAR NAVBAR
    setUsuarios();
});

const loginForm = document.getElementById("login_form");
const showPasswordBtn = document.getElementById("showPasswordBtn");
const invalidLoginFeedback = document.getElementById("login_feedback_invalido");

showPasswordBtn.addEventListener("click", (e) => {
    showPassword(e);
});


const feedback = (bool) => {
    console.log(bool,"<--Feedback")
    if(bool){
        return invalidLoginFeedback.style.visibility = 'hidden';
    }
    invalidLoginFeedback.style.visibility = 'visible';
    return
}

/**
 * 
 * @param {Object} e Evento de submit del formulario de login
 * @returns Muestra el feedback segun la validacion del usuario, puede setear al mismo y redirigirlo a la pagina principal en caso de que sea valido.
 */
const userLogin = (e) => {
    e.preventDefault();
    console.log(e,"<--Evento")
    const datosDeFormulario = Object.fromEntries(new FormData(e.target));
    invalidLoginFeedback.innerHTML = '<i class="bi bi-exclamation-circle me-2"></i> La contraseña o email ingresados son inválidos.'

    if(validateLoginUser({email: datosDeFormulario.email, password: datosDeFormulario.password})){
        const usuarios = getUsers();
        const usuario = usuarios.find( u => u.email == datosDeFormulario.email);
        if(usuario.status === 'pendiente' || usuario.status === 'suspendido'){
            console.error("usuario sin perimisos para ingresar");  
            invalidLoginFeedback.innerHTML = '<i class="bi bi-exclamation-circle me-2"></i> Cuenta pendiente/suspendida pendiente de aprobación.'
        }else{
            feedback(true);
            setLoggedUser(datosDeFormulario.email);
            console.log("EXITO")
            setTimeout( () => {
                console.log(usuario,"<--usuario")
                if(usuario.role === 'admin'){
                    window.location.pathname = "/views/admin.html"
                }else{
                    redirectIndex();
                }
            }
            , 2000);
            return;
        }
    }
    console.log("NADAAA")
    return feedback(false);
}

loginForm.addEventListener("submit", userLogin);