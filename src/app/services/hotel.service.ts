import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor( private firestore: AngularFirestore) { }

  agregarHotel(hotel:any):Promise<any>{
 
    return this.firestore.collection('hoteles').add(hotel);
  }

  getHoteles():Observable<any>{
    return this.firestore.collection('hoteles',ref=>ref.orderBy('fechaCreacion')).snapshotChanges();
  }

  eliminarHotel(id: string):Promise<any>{
    return this.firestore.collection('hoteles').doc(id).delete();
  }

  
  getHotel(id:string):Observable<any>{
    return this.firestore.collection('hoteles').doc(id).snapshotChanges();
  }

  actualizarHotel(id: string, data:any){
    
    return this.firestore.collection('hoteles').doc(id).update(data);
  }

  

}
