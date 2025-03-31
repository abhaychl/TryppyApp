import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  updateDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }
}
