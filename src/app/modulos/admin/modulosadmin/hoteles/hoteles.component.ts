import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/modelos/hotel.model';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.sass']
})


export class HotelesComponent implements OnInit {
  hoteles: Hotel[] = [];

  constructor(private _hotelservice: HotelService) { }

  ngOnInit(): void {

    this.getHoteles();
  
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

  eliminarHotel(id:string){
    this._hotelservice.eliminarHotel(id).then(()=>{
      console.log('hotel eliminado');
      

    }).catch(error=>{
      console.log(error);
      
    })

  }




}
