import { runInInjectionContext, inject, Injector } from '@angular/core';
import { Routes ,provideRouter } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [

  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'hotel',
    loadChildren: () =>
      import('./hotel/hotel.module').then(
        (m) => m.HotelModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  ];