import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import * as bootstrap from 'bootstrap';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
}).then(()=>{
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
    new bootstrap.Tooltip(el);
  });
})
  .catch(err => console.error(err));
