import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HotelesComponent } from './modulosadmin/hoteles/hoteles.component';
import { HabitacionesComponent } from './modulosadmin/habitaciones/habitaciones.component';
import { UsuariosComponent } from './modulosadmin/usuarios/usuarios.component';
import { CrearHabitacionesComponent } from './modulosadmin/crear-habitaciones/crear-habitaciones.component';
import { CrearHotelesComponent } from './modulosadmin/crear-hoteles/crear-hoteles.component';
import { CrearUsuariosComponent } from './modulosadmin/crear-usuarios/crear-usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AdminComponent,
    NavadminComponent,
    SidebarComponent,
    HotelesComponent,
    HabitacionesComponent,
    UsuariosComponent,
    CrearHabitacionesComponent,
    CrearHotelesComponent,
    CrearUsuariosComponent,
    
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added

  ]
})
export class AdminModule { }
