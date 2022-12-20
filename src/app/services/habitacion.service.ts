import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private firestore: AngularFirestore) { }
  agregarhabitacion(habitacion:any):Promise<any>{
 
    return this.firestore.collection('habitaciones').add(habitacion);
  }

  gethabitaciones():Observable<any>{
    return this.firestore.collection('habitaciones',ref=>ref.orderBy('fechaCreacion')).snapshotChanges();
  }

  eliminarhabitacion(id: string):Promise<any>{
    return this.firestore.collection('habitaciones').doc(id).delete();
  }

  
  gethabitacion(id:string):Observable<any>{
    return this.firestore.collection('habitaciones').doc(id).snapshotChanges();
  }

  actualizarHabitacion(id: string, data:any){
    
    return this.firestore.collection('habitaciones').doc(id).update(data);
  }

  obtenerHabitaciones(id:any):Observable<any>{
    return this.firestore.collection('habitaciones',ref=>ref.where('idHotel','==',id)).snapshotChanges();

  }

}
