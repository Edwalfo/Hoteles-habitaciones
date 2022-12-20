import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/modelos/hotel.model';

@Component({
  selector: 'app-crear-hoteles',
  templateUrl: './crear-hoteles.component.html',
  styleUrls: ['./crear-hoteles.component.sass']
})
export class CrearHotelesComponent implements OnInit {

  hoteles: Hotel[] = []
  crearHotel: FormGroup;
  submitted = false;
  loading = false;
  titulo = 'Crear hotel'
  id: any;

  constructor(
    private fb: FormBuilder,
    private _serviceHotel: HotelService,
    private router: Router,
    private aRoute: ActivatedRoute

    

  ) {
    this.crearHotel = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      estrellas: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required]

    })

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }



  ngOnInit(): void {
    this.esEdictar();

  }

  agregarEdictarHotel() {

    this.submitted = true;

    if (this.crearHotel.invalid) {
      return;
    }
    if(this.id===null){
      this.agregarHotel();
    }else{
      this.edictarHotel(this.id)
    }

  }

  edictarHotel(id:string){

    const hotel: Hotel = {
      nombre: this.crearHotel.value.nombre,
      direccion: this.crearHotel.value.direccion,
      estrellas: this.crearHotel.value.estrellas,
      telefono: this.crearHotel.value.telefono,
      email: this.crearHotel.value.email,
      /*      foto:this.crearHotel.value.foto, */
      fechaActualizacion: new Date()
    }
    this.loading =true;
    this._serviceHotel.actualizarHotel(this.id,hotel).then(()=>{
      this.loading=false; 
      console.log('actualizacion exitosa');
    
    }).catch(error=>{
      console.log(error);
      
    })
    this.router.navigate(['/admin/hoteles']);
  

  }

  agregarHotel() {
    const hotel: Hotel = {
      nombre: this.crearHotel.value.nombre,
      direccion: this.crearHotel.value.direccion,
      estrellas: this.crearHotel.value.estrellas,
      telefono: this.crearHotel.value.telefono,
      email: this.crearHotel.value.email,
      /*      foto:this.crearHotel.value.foto, */
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }



    this.loading = true;

    this._serviceHotel.agregarHotel(hotel).then(() => {
      console.log('usuario registrado');
      this.router.navigate(['/admin/hoteles']);


    }).catch(error => {

    })

  }

  esEdictar() {

    this.titulo = 'Edictar Hotel';
    if (this.id !== null) {

      this._serviceHotel.getHotel(this.id).subscribe(data => {


        this.crearHotel.setValue({
          nombre: data.payload.data()['nombre'],
          direccion: data.payload.data()['direccion'],
          estrellas: data.payload.data()['estrellas'],
          telefono: data.payload.data()['telefono'],
          email: data.payload.data()['email'],


        })

      })

    }

  }
}
