import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonCounterComponent } from './components/common/common-counter/common-counter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePicker } from 'primeng/datepicker';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { CustomButtonComponent } from './components/custom-button/custom-button.component';
// import { HighlightDirective } from './directives/highlight.directive';
// import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
   
    // CustomButtonComponent, // Reusable button component
    // HighlightDirective, // Example directive
    // DateFormatPipe // Example pipe
    CommonCounterComponent,
  ],
  imports: [
    CommonModule, // Contains *ngIf, *ngFor, etc.
    FormsModule,
    CarouselModule,
    BsDatepickerModule.forRoot(),
    DatePicker,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [
    CommonCounterComponent,
    CarouselModule,
    BsDatepickerModule,
    DatePicker,
    NgxMaskDirective,
    NgxMaskPipe,
    // CustomButtonComponent,
    // HighlightDirective,
    // DateFormatPipe
  ],
  providers: [
    provideNgxMask(),
    DatePipe,
    BsDatepickerConfig,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class SharedModule { }
