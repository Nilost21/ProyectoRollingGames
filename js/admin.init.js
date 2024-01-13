// IMPORTAR NAVBAR
import TableRowJuegos from "./components/TableRow-Juegos.js";
import { getJuegos } from "./services/getJuegos.js";
import { protectedAdminRoute } from "./routes/protectedAdmin.route.js";
import { createJuego } from "./services/createJuego.js";
import { setJuegos } from "./services/setJuegos.js";
document.addEventListener("DOMContentLoaded", () => {
    // NAVBAR
    setJuegos();
    //protectedAdminRoute();
    renderTableBody();
});
console.log(getJuegos(),"<--Linea")
const tableBody = document.getElementById("adminTableBody")

/**
 * @returns Renderiza las filas de la tabla de juegos en el panel de admin.
 */
export const renderTableBody = () => {
    tableBody.innerHTML = "";
    const juegos = getJuegos();

    juegos.map(juego => tableBody.innerHTML += TableRowJuegos(juego));
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

    createJuego({name: nombreForm.value, category: categoryForm.value, description: descriptionForm.value, published: publishedForm.value == 'on' ? true : false , destacado: false, image1: image1Form.value, image2: image2Form.value, video1: video1Form.value, video2: video2Form.value});


    // Cerrar el modal después de agregar el juego
    const modal = new bootstrap.Modal(document.getElementById('nuevoJuegoModal'));
    modal.hide();

    renderTableBody();
}

window.agregarNuevoJuego = agregarNuevoJuego;