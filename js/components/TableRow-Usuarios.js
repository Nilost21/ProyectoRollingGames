import { renderTableBody } from "../admin.init.js";
import { getUsers } from "../services/getUsers.js";
import { getUsuarioIndexById } from "../services/getUsuarioIndexById.js";
import { removeUsuario } from "../services/removeUsuario.js";
import { setModifiedUsuarios } from "../services/setModifiedUsuarios.js";


const TableRowUsuarios = (usuario) => {
    return `
    <tr class="align-middle">
        <th scope="row">${usuario.id}</th>
        <td>
            <select class="form-select" id="roleSelect-${usuario.id}" onchange="changeRole('${usuario.id}')">
                <option value="admin" ${usuario.role === 'admin' ? 'selected' : ''}>Administrador</option>
                <option value="user" ${usuario.role === 'user' ? 'selected' : ''}>Usuario</option>
            </select>
        </td>
        <td>${usuario.email}</td>
        <td>${usuario.password}</td>
        <td>
            <select class="form-select" id="statusSelect-${usuario.id}" onchange="changeStatus('${usuario.id}')">
                <option value="pendiente" ${usuario.status === 'pendiente' ? 'selected' : ''}>Pendiente</option>
                <option value="aprobado" ${usuario.status === 'aprobado' ? 'selected' : ''}>Aprobado</option>
                <option value="suspendido" ${usuario.status === 'suspendido' ? 'selected' : ''}>Suspendido</option>
            </select>
        </td>
        <td class = "col-lg-3 align-items-center px-5">
            <button type="button" class="btn btn-sm w-100 btn-outline-danger me-1 my-2" data-bs-toggle = "modal" data-bs-target = "#delete-usuario-modal-${usuario.id}">Eliminar<i class="bi bi-trash ms-1"></i></button>
        </td>
    </tr>

    <!-- Confirm Delete Modal -->
    <div class="modal fade modal-lg" id="delete-usuario-modal-${usuario.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header text-bg-warning">
                    <h5 class="modal-title fw-bold " id="exampleModalLabel">Confirmar Eliminación</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id ="delete-juego-modal-dialogo">
                    <i class="bi bi-exclamation-lg display-1 text-warning"></i>
                    <p class="text-warning fs-3">¿Estás seguro de que deseas eliminar al usuario "${usuario.email}"?</p>
                </div>
                <div class="modal-footer" id="footer-modal">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" data-bs-dismiss="modal" class="btn btn-danger" onclick="eliminarUsuario('${usuario.id}')">Eliminar</button>
                </div>
            </div>
        </div>
    </div>


    `
};




const changeStatus = (id) => {
    const usuarios = getUsers();
    const usuarioIndex = getUsuarioIndexById(id);
    const select = document.getElementById(`statusSelect-${id}`)

    usuarios[usuarioIndex].status = select.value;
    setModifiedUsuarios(usuarios);
    renderTableBody();
}

const changeRole = (id) => {
    const usuarios = getUsers();
    const usuarioIndex = getUsuarioIndexById(id);
    const select = document.getElementById(`roleSelect-${id}`)

    usuarios[usuarioIndex].role = select.value;
    setModifiedUsuarios(usuarios);
    renderTableBody();
}

const eliminarUsuario = (id) => {
    const usuarioIndex = getUsuarioIndexById(id);
    if(usuarioIndex !== -1){
        removeUsuario(id);
        renderTableBody();
    }else{
        console.error(`No se encontró el usuario con ID ${id}.`);
    }
}

window.changeStatus = changeStatus;
window.changeRole = changeRole;
window.eliminarUsuario = eliminarUsuario;

export default TableRowUsuarios;