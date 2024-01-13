import { getJuegos } from "../services/getJuegos.js";
import { getJuegoIndexById } from "../services/getJuegoIndexById.js";
import { setModifiedJuegos } from "../services/setModifiedJuegos.js";
import { renderTableBody } from "../admin.init.js";
import { removeJuego } from "../services/removeJuego.js";

const TableRowJuegos = (juego) =>{
    const claseDestacado = juego.destacado ? 'table-light':'';

    return `
    <tr class="align-middle ${claseDestacado}">
        <th scope="row">${juego.id}</th>
        <td>${juego.name}</td>
        <td>${juego.category}</td>
        <td class="descripcion-column">${juego.description}</td>
        <td>${juego.published ?
            `<div class="form-check w-100 d-flex justify-content-center m-0 p-0">
                <input type="checkbox" class="form-check-input" checked onchange="setPublished('${juego.id}')">
            </div>` :
            `<div class="form-check w-100 d-flex justify-content-center m-0 p-0">
                <input type="checkbox" class="form-check-input" onchange="setPublished('${juego.id}')">
            </div>`
        }
        </td>
        <td class = "col-lg-3 align-items-center px-5">
            <button type="button" class="btn btn-sm btn-secondary w-100 me-1 my-2">Editar<i class="bi bi-pencil ms-1" data-bs-target = "#edit-juego-modal"></i></button>

            <button type="button" onclick = "setDestacado('${juego.id}')" class="btn btn-sm w-100 text-light-emphasis  ${juego.destacado ? 'btn-warning':'btn-info'} me-1 my-2" data-bs-toggle = "modal"  ${juego.destacado ? "": "data-bs-target = \"#destacar-juego-modal\""}>${juego.destacado ? '<i class="bi bi-star-fill"></i>' : "Destacar <i class=\"bi bi-star ms-1\"></i>"}</button>

            <button type="button" class="btn btn-sm w-100 btn-danger me-1 my-2" data-bs-toggle = "modal" data-bs-target = "#delete-juego-modal-${juego.id}">Eliminar<i class="bi bi-trash ms-1"></i></button>
        </td>
    </tr>

    <!-- Confirm Delete Modal -->
    <div class="modal fade" id="delete-juego-modal-${juego.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmar Eliminación</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id ="delete-juego-modal-dialogo">
                    ¿Estás seguro de que deseas eliminar el juego "${juego.name}"?
                </div>
                <div class="modal-footer" id="footer-modal">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" data-bs-dismiss="modal" class="btn btn-danger" onclick="eliminarJuego('${juego.id}')">Eliminar</button>
                </div>
            </div>
        </div>
    </div>


    `;
};


const setPublished = (id) => {
    const juegos = getJuegos();
    const juegoIndex = getJuegoIndexById(id);

    juegos[juegoIndex].published = !juegos[juegoIndex].published;
    setModifiedJuegos(juegos);
    renderTableBody();
};

const setDestacado = (id) => {
    const juegos = getJuegos();
    const juegoIndex = getJuegoIndexById(id);
    console.log(juegos[juegoIndex].destacado,"<--bool")
    
    switch (juegos[juegoIndex].destacado) {
        case false:
            juegos.forEach((juego, index) => {
                juego.destacado = juegoIndex === index;
                console.log(juego.name +" <-- "+ juego.destacado);
            });
            const modalJuegoDestacadoNombre = document.getElementById('modal-juegoDestacado-nombre');
            modalJuegoDestacadoNombre.innerHTML = `<i class="bi bi-chat-dots me-3"></i> ${juegos[juegoIndex].name} es el nuevo juego destacado <i class="bi bi-controller ms-3"/i>`;
        break;
        default:
            juegos[juegoIndex].destacado = false;
    }

    console.log("fuera del switch")
    setModifiedJuegos(juegos);
    renderTableBody();

    //juegos.forEach((g, id) => console.log(g.destacado,"<--"+id));
}

const eliminarJuego = (id) => {
    const juegoIndex = getJuegoIndexById(id);
    console.log(juegoIndex,"<-- Juego indice")
    if(juegoIndex !== -1){
        removeJuego(id);
        renderTableBody();
    }else{
        console.error(`No se encontró el juego con ID ${id}.`)
    }
}

window.setPublished = setPublished;
window.setDestacado = setDestacado;
window.eliminarJuego = eliminarJuego;

export default TableRowJuegos;