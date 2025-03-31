import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { CustomButtonComponent } from './components/custom-button/custom-button.component';
// import { HighlightDirective } from './directives/highlight.directive';
// import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    // CustomButtonComponent, // Reusable button component
    // HighlightDirective, // Example directive
    // DateFormatPipe // Example pipe
  ],
  imports: [
    CommonModule, // Contains *ngIf, *ngFor, etc.
    FormsModule
  ],
  exports: [
    // CustomButtonComponent,
    // HighlightDirective,
    // DateFormatPipe
  ]
})
export class SharedModule { }
