import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  imports: [],
  standalone:true,
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {

  }

  ngOnInit(): void {   
    this.titleService.setTitle('About Us - My Angular 19 App');
    this.metaService.updateTag({
      name: 'description',
      content: 'Learn all about our company, mission, and values.'
    });

  }
}
