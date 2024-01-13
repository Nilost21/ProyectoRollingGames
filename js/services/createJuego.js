import { Juego } from "../classes/juego.class.js";
import { getJuegos } from "./getJuegos.js";
import { setModifiedJuegos } from "./setModifiedJuegos.js";

export const createJuego = ({name, category, description, published, image1, image2, video1, video2}) => {
    console.log('createJuego llamado con:', name, category, description, published, image1, image2, video1, video2);
    const juegos = getJuegos() || [];
    console.log(juegos,"<--juegos1: createJuego")
    
    const nuevoJuego = new Juego({name: name, category:category, description:description, published:published, destacado: false, image1:image1, image2:image2, video1:video1, video2:video2});

    console.log(nuevoJuego);

    juegos.push(nuevoJuego);
    console.log(juegos,"<--juegos2: createJuego");

    setModifiedJuegos(juegos);
    console.log(`Juego: ${name} categoria: ${category} cargado exitosamente`);
}