import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { HotelService } from 'src/app/services/hotel.service';
import { habitacion } from 'src/modelos/habitacion.model';
import { Hotel } from 'src/modelos/hotel.model';


@Component({
  selector: 'app-crear-habitaciones',
  templateUrl: './crear-habitaciones.component.html',
  styleUrls: ['./crear-habitaciones.component.sass']
})
export class CrearHabitacionesComponent implements OnInit {

  habitaciones: habitacion[] = [];
  hoteles: Hotel[] = [];
  crearHabitacion: FormGroup;
  submitted = false;
  loading = false;
  titulo = 'Crear habitacion'
  id: any;


  constructor(private fb: FormBuilder,
    private _hotelservice: HotelService,
    private _serviceHabitacion: HabitacionService,
    private router: Router,
    private aRoute: ActivatedRoute
    ) {

    this.crearHabitacion = this.fb.group({

      selecHoteles: ['', Validators.required],
      Nombre: ['', Validators.required],
      Precioalta: ['', Validators.required],
      Preciobaja: ['', Validators.required],
      descripcion: ['', Validators.required]



    })


    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getHoteles();
    this.esEdictar();
  }

  agregarEdictarHabitacion() {

    this.submitted = true;

    if (this.crearHabitacion.invalid) {
      return;
    }
    if (this.id === null) {
      this.agregarHabitacion();
    } else {
      this.edictarHabitacion(this.id)
    }

  }

  edictarHabitacion(id: string) {

    const habitacion: habitacion = {
      idHotel: this.crearHabitacion.value.selecHoteles,
      nombre: this.crearHabitacion.value.Nombre,
      precioAlta: this.crearHabitacion.value.Precioalta,
      precioBaja: this.crearHabitacion.value.Preciobaja,
      descripcion: this.crearHabitacion.value.descripcion,
      fechaActualizacion: new Date()
    }

    console.log(habitacion);
    
    this.loading = true;
    this._serviceHabitacion.actualizarHabitacion(id, habitacion).then(() => {
      this.loading = false;
      console.log('actualizacion exitosa');

    }).catch(error => {
      console.log(error);

    })
    this.router.navigate(['/admin/habitaciones']);


  }

  agregarHabitacion() {
    const hotel: habitacion = {
      idHotel: this.crearHabitacion.value.selecHoteles,
      nombre: this.crearHabitacion.value.Nombre,
      precioAlta: this.crearHabitacion.value.Precioalta,
      precioBaja: this.crearHabitacion.value.Preciobaja,
      descripcion: this.crearHabitacion.value.descripcion,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }



    this.loading = true;

    this._serviceHabitacion.agregarhabitacion(hotel).then(() => {
      console.log('habitacion registrado');
      this.router.navigate(['/admin/habitaciones']);


    }).catch(error => {

    })

  }

  esEdictar() {

    this.titulo = 'Edictar Habitacion';
    if (this.id !== null) {

      this._serviceHabitacion.gethabitacion(this.id).subscribe(data => {


        this.crearHabitacion.setValue({
          selecHoteles: data.payload.data()['idHotel'],
          Nombre: data.payload.data()['nombre'],
          Precioalta: data.payload.data()['precioAlta'],
          Preciobaja: data.payload.data()['precioBaja'],
          descripcion: data.payload.data()['descripcion'],


        })

      })

    }

  }


  getHoteles() {
    this._hotelservice.getHoteles().subscribe(data => {
      this.hoteles = [];
      data.forEach((element: any) => {
        this.hoteles.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()

        })

      });
    })
  }


}
