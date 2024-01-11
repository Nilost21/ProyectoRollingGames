import { getJuegos } from "../services/getJuegos";
import { getJuegoIndexById } from "../services/getJuegoIndexById";
import { setModifiedJuegos } from "../services/setModifiedJuegos";
import { renderTableBody } from "../admin.init";

const tableRowJuegos = (juego) =>{
    return `
    <tr>
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
        <td>
            <button type="button" class="btn btn-sm btn-secondary  me-1">Editar<i class="bi bi-pencil ms-1" data-bs-target = "#edit-juego-modal"></i></button>

            <button type="button" class="btn btn-sm btn-info me-1 " data-bs-target = "#destacar-juego-modal">Destacar<i class="bi bi-star ms-1"></i></button>

            <button type="button" class="btn btn-sm btn-danger me-1 mt-2" data-bs-target = "#delete-juego-modal">Eliminar<i class="bi bi-trash ms-1"></i></button>
        </td>
    </tr>
    `;
};


const setPublished = (id) => {
    const juegos = getJuegos();
    const juegoIndex = getJuegoIndexById(id);

    juegos[juegoIndex] = !juegos[juegoIndex].published;
    setModifiedJuegos(juegos);
    renderTableBody();
};

window.setPublished = setPublished;

export default tableRowJuegos;