export class Usuario {
    constructor({email, password, status, role, image1, image2}){
        this.email = email;
        this.password = password;
        this.status = status;
        this.role = role;
        this.image1 = image1;
        this.image2 = image2;

        this.id = crypto.randomUUID;
    }
}