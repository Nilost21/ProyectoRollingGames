import { validateEmail } from "./validators/validateEmail.js";
import { redirectIndex } from "./utils/redirectIndex.js";

const contactMail = document.getElementById("contact_email");
const signUpForm = document.getElementById("contact_form");

/**
 * 
 * @param {string} email Recibe un correo electrónico
 * @returns Debe mostrar el feedback de comparación de correos válidos o inválidos.
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
 * Muestra el modal y redirige a otra página después de 3 segundos.
 */
const showSuccessfulSignUpModal = () => {
    const modal = new bootstrap.Modal(document.getElementById('contactModal'));
    modal.show();
    setTimeout(() => {
        modal.hide();
        redirectIndex();
    }, 7000); // Reduced the delay to 2 seconds
};


/**
 * 
 * Valida el formulario y, si todo está OK, muestra el modal y te lleva al índice.
 */
const signUpSubmit = (e) => {
    e.preventDefault();

    // Toma los datos de los input
    const email = contactMail.value;
    
    if (emailFeedback(email)) {
        showSuccessfulSignUpModal();
    } else {
        alert("Error en la validación. Ingrese un email en formato válido");
    }
}
signUpForm.addEventListener("submit", signUpSubmit);
