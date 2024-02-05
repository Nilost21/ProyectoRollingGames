import { validateEmail } from "./validators/validateEmail.js";
import { redirectIndex } from "./utils/redirectIndex.js"

const contactMail =  document.getElementById("contact_email");
const signUpForm = document.getElementById("contact_form");


/**
 * 
 * @param {string} email Recibe una contraseña
 * @returns Debe mostrar el feedback de comparación de contraseñas valida o invalida.
 */

const emailFeedback = (email) => {
    contactMail.classList.remove("is-valid");
    contactMail.classList.remove("is-invalid");

    if (validateEmail(email)) {
        contactMail.classList.add("is-valid");
        return true;
    } else {
        contactMail.classList.add("is-invalid");
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
    setTimeout(redirectIndex, 3000)
} 

/**
 * 
 * Valida el formulario y si todo esta OK muestra el modal y te lleva al index
 */
const signUpSubmit = (e) => {
    e.preventDefault();

    //Toma los datos de los input
    const email = contactMail.value;

    if (emailFeedback(email)) {
        alert("todo bien validado")
        showSuccesfulSignUpModal();
    } else {
        alert("Error en la validación");
    }
}

signUpForm.addEventListener("submit", signUpSubmit);