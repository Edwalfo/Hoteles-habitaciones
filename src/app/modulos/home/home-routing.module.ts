import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitacionesHotelComponent } from './habitaciones-hotel/habitaciones-hotel.component';

import { HomeComponent } from './home.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'habitacionesHotel/:id',component: HabitacionesHotelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
