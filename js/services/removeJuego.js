import { getJuegos } from "./getJuegos.js";
import { getJuegoIndexById } from "./getJuegoIndexById.js";
import { setModifiedJuegos } from "./setModifiedJuegos.js";

export const removeJuego = (id) => {
    const juegos = getJuegos();
    const index = getJuegoIndexById(id);
    juegos.splice(index,1)
    setModifiedJuegos(juegos);
}