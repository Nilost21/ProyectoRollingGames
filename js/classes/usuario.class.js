//import { generateUniqueId } from "../utils/generateIds.js";
export class Usuario {
    constructor({id, email, password, status, role, image1, image2}){
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = status;
        this.image1 = image1;
        this.image2 = image2;
    }
}