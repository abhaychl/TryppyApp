import { RenderMode, ServerRoute } from '@angular/ssr';
import { Component } from '@angular/core';

 export const serverRoutes: ServerRoute[] = [
  {
    // Prerender the default route ("/")
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    // Prerender the aboutus page ("/aboutus")
    path: 'aboutus',
    renderMode: RenderMode.Prerender,
  },
  {
    // Prerender the aboutus page ("/aboutus")
    path: 'hotel',
    renderMode: RenderMode.Prerender,
  },
  {
    // Catch-all fallback (if desired)
    path: '**',
    renderMode: RenderMode.Prerender,
  }

];

