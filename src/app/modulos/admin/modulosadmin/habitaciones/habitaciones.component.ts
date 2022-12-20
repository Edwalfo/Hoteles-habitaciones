import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { HotelService } from 'src/app/services/hotel.service';
import { habitacion } from 'src/modelos/habitacion.model';
import { Hotel } from 'src/modelos/hotel.model';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.sass']
})
export class HabitacionesComponent implements OnInit {

  habitaciones: habitacion[] = [];
  hoteles: Hotel[] = [];
  constructor(
    private _habitacionesService: HabitacionService,
    private _hotelservice: HotelService
  ) { }

  ngOnInit(): void {
    this.getHabitaciones();
    this.getHoteles();
  }

  getHabitaciones(){
    this._habitacionesService.gethabitaciones().subscribe(data=>{
      this.habitaciones=[];
      data.forEach((element: any) => {
        this.habitaciones.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()

        })
        
      });
    })
  }

  eliminarHabitacion(id:string){
    this._habitacionesService.eliminarhabitacion(id).then(()=>{
      console.log('habitacion eliminada');
      

    }).catch(error=>{
      console.log(error);
      
    })

  }

  getHoteles(){
    this._hotelservice.getHoteles().subscribe(data=>{
      this.hoteles=[];
      data.forEach((element: any) => {
        this.hoteles.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()

        })
        
      });
    })
  }

}


