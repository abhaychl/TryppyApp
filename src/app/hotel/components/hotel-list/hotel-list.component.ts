import { Component } from '@angular/core';
import { routes } from '../../../core/constants/routes';
import { Router, RouterLink } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
//import { Slider } from 'primeng/slider';
import { MatSliderModule } from '@angular/material/slider';
import { HotelService } from '../../services/hotel.service';
//import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [ 
    RouterLink
    ,SharedModule,
    CommonModule,
    MatSliderModule,
   
  ],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss'
})
export class HotelListComponent {
  public routes=routes;
  hotelList:any[]=[];  
 bsValue =new Date();
 value!: number;
 public isClassAdded: boolean[] = [false];
 public isSelected :boolean[]=[false];
 rangeValues: number[] = [20, 80];
 public isMore : boolean[]=[false];
 startValue = 500;
 endValue = 3000;

 constructor (private router: Router
  ,private _hotelservice:HotelService
 ){
 }

 ngOnInit() {
  this.getHotelList();
}


 getHotelList() {   
  this._hotelservice.getHotelList().subscribe({
    next: (resp: any) => {
      debugger;
      console.log(resp);
      this.hotelList = resp;
      
    },
    error: (err: any) => {
      console.error('Error fetching designations', err);
    }
  });
  
  
}
 formatLabel(value: number): string {
  if (value >= 100) {
    return Math.round(value) + '';
  }

  return `${value}`;
}

formatLabel1(value: number): string {
  if (value >= 5000) {
    return '₹'+ Math.round(value / 5000) ;
  }

  return `₹${value}`;
}

 public imageSlider : OwlOptions ={
  loop: true,
    margin: 20,
    nav: true,
    dots: true,
    smartSpeed: 2000,
    autoplay: false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
}

toggleClass(index: number){
  this.isClassAdded[index] = !this.isClassAdded[index]
}
selectClass(index:number):void{
 this.isSelected[index]=!this.isSelected[index];
}
showMore(index:number) : void {
  this.isMore[index]=!this.isMore[index];
}

}
