export class Juego {
    constructor({name, category, description, published, destacado, image1, image2, video1, video2}){
        this.name = name;
        this.category = category;
        this.description = description;
        this.published = published;
        this.destacado = destacado;
        this.image1 = image1;
        this.image2 = image2;
        this.video1 = video1;
        this.video2 = video2;
        this.id = crypto.randomUUID(); // No se toca por nada en el mundo jeje
    }
}