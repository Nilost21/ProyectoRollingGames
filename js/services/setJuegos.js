import juegosDB from "../database/juegos.json" assert {type: "json"};

export const setJuegos = () => {
    const juegos = JSON.parse(localStorage.getItem("juegos")) || null;
    if(!juegos || juegos?.length == 0){
        localStorage.setItem("juegos", JSON.stringify(juegosDB));
    }
};