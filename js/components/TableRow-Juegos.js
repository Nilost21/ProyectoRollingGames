import { getJuegos } from "../services/getJuegos.js";
import { getJuegoIndexById } from "../services/getJuegoIndexById.js";
import { setModifiedJuegos } from "../services/setModifiedJuegos.js";
import { renderTableBody } from "../admin.init.js";
import { removeJuego } from "../services/removeJuego.js";
import { Juego } from "../classes/juego.class.js";


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
            <button type="button" class="btn btn-sm btn-secondary w-100 me-1 my-2" data-bs-toggle = "modal" data-bs-target = "#edit-juego-modal-${juego.id}">Editar<i class="bi bi-pencil ms-1"></i></button>

            <button type="button" onclick = "setDestacado('${juego.id}')" class="btn btn-sm w-100 text-light-emphasis  ${juego.destacado ? 'btn-warning':'btn-outline-info'} me-1 my-2" data-bs-toggle = "modal"  ${juego.destacado ? "": "data-bs-target = \"#destacar-juego-modal\""}>${juego.destacado ? '<i class="bi bi-star-fill"></i>' : "Destacar <i class=\"bi bi-star ms-1\"></i>"}</button>

            <button type="button" class="btn btn-sm w-100 btn-outline-danger me-1 my-2" data-bs-toggle = "modal" data-bs-target = "#delete-juego-modal-${juego.id}">Eliminar<i class="bi bi-trash ms-1"></i></button>
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

    <!-- Editar Juego Modal -->
    <div class="modal fade" id="edit-juego-modal-${juego.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editarJuegoEncabezado-${juego.id}" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content ">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="editarJuegoEncabezado-${juego.id}"><i class="bi bi-pencil-square me-3"></i></i>Editar juego</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body ">
                    <form>
                        <div class="mb-3 text-start">
                            <label for="editarNameJuego-${juego.id}" class="form-label text-start">Nombre</label>
                            <input type="text" class="form-control" id="editarNameJuego-${juego.id}" maxlength="50" placeholder ="Nombre" value="${juego.name}">
                        </div>

                        <div class="mb-3 text-start">
                            <label for="editarDescriptionJuego-${juego.id}" class="form-label text-start">Descripcion del juego</label>
                            <textarea class="form-control" id="editarDescriptionJuego-${juego.id}" rows="3" placeholder ="Cuéntanos por qué decidiste añadirlo">${juego.description}</textarea>
                        </div>

                        <div class="form-floating">
                            <select class="form-select" aria-label="Floating label select example" id="editarCategoryJuego-${juego.id}">
                                <option selected>---------</option>
                                <option value="accion" ${juego.category === "accion" ? 'selected' : ''}>Acción</option>
                                <option value="aventura" ${juego.category === "aventura" ? 'selected' : ''}>Aventura</option>
                                <option value="deportes" ${juego.category === "deportes" ? 'selected' : ''}>Deportes</option>
                                <option value="estrategia" ${juego.category === "estrategia" ? 'selected' : ''}>Estrategia</option>
                                <option value="puzzle" ${juego.category === "puzzle" ? 'selected' : ''}>Puzzle</option>
                            </select>
                            <label for="editarCategoryJuego-${juego.id}">Selecciona una categoría</label>
                        </div>
                        
                        <hr>

                        <div class="row mb-3">
                            <label for="editarImage1Juego-${juego.id}" class="col-3 col-form-label">Image 1</label>
                            <div class="col-9">
                                <input type="text" class="form-control" id="editarImage1Juego-${juego.id}" maxlength="50" placeholder ="Ingresa la URL de la imagen" value = "${juego.image1}">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="editarImage2Juego-${juego.id}" class="col-3 col-form-label">Image 2</label>
                            <div class="col-9">
                                <input type="text" class="form-control" id="editarImage2Juego-${juego.id}" maxlength="50" placeholder ="Ingresa la URL de la imagen" value = "${juego.image2}">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="editarVideo1Juego-${juego.id}" class="col-3 col-form-label">Video 1</label>
                            <div class="col-9">
                                <input type="text" class="form-control" id="editarVideo1Juego-${juego.id}" maxlength="50" placeholder ="Ingresa la URL del video" value = "${juego.video1}">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="editarVideo2Juego-${juego.id}" class="col-3 col-form-label">Video 2</label>
                            <div class="col-9">
                                <input type="text" class="form-control" id="editarVideo2Juego-${juego.id}" maxlength="50" placeholder ="Ingresa la URL del video" value = "${juego.video2}">
                            </div>
                        </div>

                        <hr>

                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="editarPublicadoJuego-${juego.id}" ${juego.published ?'checked' : '' }>
                            <label class="form-check-label" for="editarPublicadoJuego-${juego.id}">Publicado</label>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-outline-info" onclick="editJuego('${juego.id}')" data-bs-dismiss="modal">Guardar</button>
                </div>
            </div>
        </div>
    </div>
    
<!-- Editar Juego Modal - Exito-->
<div
    class="modal fade modal-lg"
    id="editarJuegoExito-${juego.id}"
    tabindex="-1"
    data-bs-backdrop="static"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body border-0">
          <div class="text-center">
            <i class="bi bi-check-lg display-1 text-success"></i>
            <h2 class="fw-normal my-2">${juego.name} editado exitosamente!</h2>
          </div>
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

const editJuego = (id) => {
    const nombreForm = document.getElementById(`editarNameJuego-${id}`).value;
    console.log(nombreForm,"<---agregarJuegoNuevo");
    const descriptionForm = document.getElementById(`editarDescriptionJuego-${id}`).value;
    const categoryForm = document.getElementById(`editarCategoryJuego-${id}`).value;
    const image1Form = document.getElementById(`editarImage1Juego-${id}`).value;
    const image2Form = document.getElementById(`editarImage2Juego-${id}`).value;
    const video1Form = document.getElementById(`editarVideo1Juego-${id}`).value;
    const video2Form = document.getElementById(`editarVideo2Juego-${id}`).value;
    const publishedForm = document.getElementById(`editarPublicadoJuego-${id}`).checked;

    const juegoIndex = getJuegoIndexById(id);
    console.log(juegoIndex,"<-- EDITAR Juego indice");

    const juegos = getJuegos();

    if(juegoIndex !== -1){
        juegos[juegoIndex].name = nombreForm;
        juegos[juegoIndex].description = descriptionForm;
        juegos[juegoIndex].category = categoryForm;
        juegos[juegoIndex].image1 = image1Form;
        juegos[juegoIndex].image2 = image2Form;
        juegos[juegoIndex].video1 = video1Form;
        juegos[juegoIndex].video2 = video2Form;
        juegos[juegoIndex].published = publishedForm;
        setModifiedJuegos(juegos);

    }else{
        console.error(`No se encontró el juego con ID ${id}.`)
    }
    
    // Cerrar el modal después de editar el juego
    const modalForm = new bootstrap.Modal(document.getElementById(`edit-juego-modal-${id}`));
    modalForm.hide();

    const modalExito = new bootstrap.Modal(document.getElementById(`editarJuegoExito-${id}`));
    modalExito.show();
    
    setTimeout(()=>{
        modalExito.hide();
    },2500);
    

    renderTableBody();
}

window.setPublished = setPublished;
window.setDestacado = setDestacado;
window.eliminarJuego = eliminarJuego;
window.editJuego = editJuego;

export default TableRowJuegos;