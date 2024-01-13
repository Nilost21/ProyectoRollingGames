export class Juego {
    constructor({name, category, description, published, destacado, image1, image2, video1, video2}){
        this._name = name;
        this._category = category;
        this._description = description;
        this._published = published;
        this._destacado = destacado;
        this._image1 = image1;
        this._image2 = image2;
        this._video1 = video1;
        this._video2 = video2;
        this._id = crypto.randomUUID(); // No se toca por nada en el mundo jeje
    }
    
    get name(){
        return this._name;
    }
    set name(nuevoName){
        this._name = nuevoName;
    }

    get category(){
        return this._category;
    }
    set category(nuevaCategory){
        this._category = nuevaCategory;
    }

    get description(){
        return this._description;
    }
    set description(nuevaDescription){
        this._description = nuevaDescription;
    }
    
    get published(){
        return this._published;
    }
    set published(nuevaPublished){
        this._published = nuevaPublished;
    }

    get destacado(){
        return this._destacado;
    }
    set destacado(nuevoDestacado){
        this._destacado = nuevoDestacado;
    }
    
    get image1(){
        return this._image1;
    }
    set image1(nuevaImage1){
        this._image1 = nuevaImage1;
    }
    
    get image2(){
        return this._image2;
    }
    set image2(nuevaImage2){
        this._image2 = nuevaImage2;
    }
    
    get video1(){
        return this._video1;
    }
    set video1(nuevoVideo1){
        this._video1 = nuevoVideo1;
    }
    
    get video2(){
        return this._video2;
    }
    set video2(nuevoVideo2){
        this._video2 = nuevoVideo2;
    }
}