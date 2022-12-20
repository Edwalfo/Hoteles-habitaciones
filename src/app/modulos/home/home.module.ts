import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { LoginComponent } from './login/login.component';
import { FooterhomeComponent } from './footerhome/footerhome.component';
import { CardhotelComponent } from './cardhotel/cardhotel.component';
import { NavhomeComponent } from './navhome/navhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HabitacionesHotelComponent } from './habitaciones-hotel/habitaciones-hotel.component';


@NgModule({
  declarations: [HomeComponent, HeaderhomeComponent, LoginComponent, FooterhomeComponent, CardhotelComponent, NavhomeComponent, HabitacionesHotelComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
