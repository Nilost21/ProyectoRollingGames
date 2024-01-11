import { getJuegos } from "../services/getJuegos.js";
import { getJuegoIndexById } from "../services/getJuegoIndexById.js";
import { setModifiedJuegos } from "../services/setModifiedJuegos.js";
import { renderTableBody } from "../admin.init.js";

const TableRowJuegos = (juego) =>{
    const claseDestacado = juego.destacado ? 'destacado-row':'';

    return `
    <tr class="align-middle ${claseDestacado}">
        <th scope="row">${juego.id}</th>
        <td>${juego.name}</td>
        <td>${juego.category}</td>
        <td class="">${juego.description}</td>
        <td>${juego.published ?
            `<div class="form-check w-100 d-flex justify-content-center m-0 p-0">
                <input type="checkbox" class="form-check-input" checked onchange="setPublished('${juego.id}')">
            </div>` :
            `<div class="form-check w-100 d-flex justify-content-center m-0 p-0">
                <input type="checkbox" class="form-check-input" onchange="setPublished('${juego.id}')">
            </div>`
        }
        </td>
        <td class = "col-lg-3 align-items-center">
            <button type="button" class="btn btn-sm btn-secondary  me-1 my-2">Editar<i class="bi bi-pencil ms-1" data-bs-target = "#edit-juego-modal"></i></button>

            <button type="button" onclick = "setDestacado('${juego.id}')" class="btn btn-sm ${juego.destacado ? 'btn-warning':'btn-info'} me-1 my-2" data-bs-toggle = "modal" data-bs-target = "#destacar-juego-modal">Destacar<i class="bi ${juego.destacado ?'bi-star-fill' : 'bi-star'} ms-1"></i></button>

            <button type="button" class="btn btn-sm btn-danger me-1 my-2" data-bs-target = "#delete-juego-modal">Eliminar<i class="bi bi-trash ms-1"></i></button>
        </td>
    </tr>
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

    juegos.forEach((juego, index) => {
        juego.destacado = juegoIndex === index;
    });

    setModifiedJuegos(juegos);
    renderTableBody();

    const modalJuegoDestacadoNombre = document.getElementById('modal-juegoDestacado-nombre');
    modalJuegoDestacadoNombre.innerHTML = `<i class="bi bi-chat-dots me-3"></i> ${juegos[juegoIndex].name} es el nuevo juego destacado <i class="bi bi-controller ms-3"/i>`;
    //juegos.forEach((g, id) => console.log(g.destacado,"<--"+id));
}

window.setPublished = setPublished;
window.setDestacado = setDestacado;

export default TableRowJuegos;