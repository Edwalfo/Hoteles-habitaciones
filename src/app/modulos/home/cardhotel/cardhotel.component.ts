import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { HotelService } from 'src/app/services/hotel.service';
import { habitacion } from 'src/modelos/habitacion.model';
import { Hotel } from 'src/modelos/hotel.model';

@Component({
  selector: 'app-cardhotel',
  templateUrl: './cardhotel.component.html',
  styleUrls: ['./cardhotel.component.sass']
})
export class CardhotelComponent implements OnInit {
  hoteles: Hotel[] = [];
  habitaciones: habitacion[] = [];


  constructor(
    private _hotelservice: HotelService,
    private _habitacionesService: HabitacionService,
  ) { }

  ngOnInit(): void {
    this.getHoteles();
    this.getHabitaciones();
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

}
