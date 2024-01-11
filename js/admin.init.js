// IMPORTAR NAVBAR
import TableRowJuegos from "./components/TableRow-Juegos.js";
import { getJuegos } from "./services/getJuegos.js";
import { protectedAdminRoute } from "./routes/protectedAdmin.route.js";

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