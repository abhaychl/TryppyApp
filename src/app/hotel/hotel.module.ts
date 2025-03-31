import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    HotelListComponent,
    HotelDetailComponent
  ]
})
export class HotelModule { }
