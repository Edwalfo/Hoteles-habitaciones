import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CrearHabitacionesComponent } from './modulosadmin/crear-habitaciones/crear-habitaciones.component';
import { CrearHotelesComponent } from './modulosadmin/crear-hoteles/crear-hoteles.component';
import { CrearUsuariosComponent } from './modulosadmin/crear-usuarios/crear-usuarios.component';
import { HabitacionesComponent } from './modulosadmin/habitaciones/habitaciones.component';
import { HotelesComponent } from './modulosadmin/hoteles/hoteles.component';
import { UsuariosComponent } from './modulosadmin/usuarios/usuarios.component';

const routes: Routes = [
  {path:'',component:AdminComponent},

  {path:'hoteles', component: HotelesComponent},
  {path:'crear-hoteles', component: CrearHotelesComponent},
  {path:'edictar-hoteles/:id', component: CrearHotelesComponent},

  {path:'habitaciones', component: HabitacionesComponent},
  {path:'crear-habitaciones', component: CrearHabitacionesComponent},
  {path:'edictar-habitaciones/:id', component: CrearHabitacionesComponent},

  {path:'usuarios', component: UsuariosComponent},
  {path:'crear-usuarios', component: CrearUsuariosComponent},
  {path:'edictar-usuarios/:id', component: CrearUsuariosComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
