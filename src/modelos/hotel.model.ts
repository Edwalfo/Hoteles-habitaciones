export class Hotel {
    id?: any;
    nombre: String;
    direccion: String;
    estrellas: number;
    telefono: String;
    email: String;
/*     foto?: string; */
    fechaCreacion?: Date;
    fechaActualizacion?: Date;

    constructor(nombre: String, direccion: String, estrellas: number, telefono: string, email: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.estrellas = estrellas;
        this.telefono = telefono;
        this.email = email;

    }

}