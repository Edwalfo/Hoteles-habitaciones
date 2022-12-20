import { Hotel } from "./hotel.model";

export class habitacion {
    id?: any;
    idHotel: any;
    nombre: String;
    precioAlta: number;
    precioBaja: number;
    descripcion: string;
    fechaCreacion?: Date;
    fechaActualizacion?: Date;


    constructor(idHotel: string, nombre: String, precioAlta: number, precioBaja: number, descripcion: string) {
        this.idHotel = idHotel;
        this.nombre = nombre;
        this.precioAlta = precioAlta;
        this.precioBaja = precioBaja;
        this.descripcion = descripcion;


    }

}