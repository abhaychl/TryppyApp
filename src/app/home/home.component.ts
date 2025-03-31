import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //public routes = routes

  constructor(
    private router: Router,
    private renderer:Renderer2
  ){}
  navigation(){
    //this.router.navigate([routes.index])
  }
  ngOnInit(): void {
   // this.renderer.addClass(document.body, 'bg-light-200');
  }
  ngOnDestroy(): void {
  //  this.renderer.removeClass(document.body, 'bg-light-200');
  }

  bsValue=new Date();
}
