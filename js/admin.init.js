// IMPORTAR NAVBAR
import TableRowJuegos from "./components/TableRow-Juegos.js";
import TableRowUsuarios from "./components/TableRow-Usuarios.js";
import { getJuegos } from "./services/getJuegos.js";
import { protectedAdminRoute } from "./routes/protectedAdmin.route.js";
import { createJuego } from "./services/createJuego.js";
import { setJuegos } from "./services/setJuegos.js";
import { setUsuarios } from "./services/setUsuarios.js";
import { getUsers } from "./services/getUsers.js";

document.addEventListener("DOMContentLoaded", () => {
    setJuegos();
    setUsuarios();
    protectedAdminRoute();
    renderTableBody();
});

const tableBody = document.getElementById("adminTableBody");
const tableBodyUsuarios = document.getElementById("adminTableBodyUsuarios");

/**
 * @returns Renderiza las filas de la tabla de juegos en el panel de admin.
 */
export const renderTableBody = () => {
    tableBody.innerHTML = "";
    const juegos = getJuegos();
    console.log(getJuegos(),"<--Linea")
    juegos.map(juego => tableBody.innerHTML += TableRowJuegos(juego));

    tableBodyUsuarios.innerHTML = "";
    const usuarios = getUsers();
    usuarios.map(usuario => tableBodyUsuarios.innerHTML += TableRowUsuarios(usuario));
}

const agregarNuevoJuego = () => {
    const nombreForm = document.getElementById("nameJuego");
    console.log(nombreForm,"<---agregarJuegoNuevo");
    const descriptionForm = document.getElementById('descriptionJuego')
    const categoryForm = document.getElementById("categoryJuego");
    const image1Form = document.getElementById("image1Juego");
    const image2Form = document.getElementById("image2Juego");
    const video1Form = document.getElementById("video1Juego");
    const video2Form = document.getElementById("video2Juego");
    const publishedForm = document.getElementById("publicadoJuego");
    const priceForm = document.getElementById("precioJuego");
    console.log(priceForm.value,"<--priceForm")
    const discountPercentageForm = document.getElementById("descuentoJuego");
    console.log(discountPercentageForm.value,"<--descuento")

    const frase = document.getElementById("juegoNuevoFrase");
    frase.innerHTML = `Juego: ${nombreForm.value} ahora forma parte de tu lista <i class="bi bi-emoji-sunglasses ms-3"></i>`

    createJuego({name: nombreForm.value, category: categoryForm.value, description: descriptionForm.value, published: publishedForm.checked , destacado: false, image1: image1Form.value, image2: image2Form.value, video1: video1Form.value, video2: video2Form.value, price: priceForm.value, discountPercentage: discountPercentageForm.value});

    
    // Cerrar el modal después de agregar el juego
    const modalForm = new bootstrap.Modal(document.getElementById('nuevoJuegoModal'));
    modalForm.hide();

    const modalExito = new bootstrap.Modal(document.getElementById('juegoNuevoExito'));
    modalExito.show();
    
    setTimeout(()=>{
        modalExito.hide();
    },2500);
    
    nombreForm.value = "";
    descriptionForm.value = "";
    categoryForm.value = "";
    image1Form.value = "";
    image2Form.value = "";
    video1Form.value = "";
    video2Form.value = "";
    publishedForm.value = "";
    priceForm.value = "";
    discountPercentageForm.value = "";

    renderTableBody();
}


window.agregarNuevoJuego = agregarNuevoJuego;