import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { HotelService } from 'src/app/services/hotel.service';
import { habitacion } from 'src/modelos/habitacion.model';
import { Hotel } from 'src/modelos/hotel.model';

@Component({
  selector: 'app-habitaciones-hotel',
  templateUrl: './habitaciones-hotel.component.html',
  styleUrls: ['./habitaciones-hotel.component.sass']
})
export class HabitacionesHotelComponent implements OnInit {

  habitaciones: habitacion[] = [];
  hoteles: Hotel[] = [];
  id:any;
  nombre:any;
  direccion:any;
  telefono:any;
  estrellas:any;
  constructor(
    private _serviceHotel: HotelService,
    private _habitacionesService:HabitacionService,
    private aRoute: ActivatedRoute

  ) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.gethotel();
    this.getHabitaciones();
   
  }

  gethotel() {

    if (this.id !== null){
      this._serviceHotel.getHoteles().subscribe(data =>{

        data.forEach((element: any) => {
          this.hoteles.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
  
          })
          
        });

       
        
      
        
      })

      
      
    }

    
  }

  
  getHabitaciones(){
    this._habitacionesService.obtenerHabitaciones(this.id).subscribe(data=>{
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
