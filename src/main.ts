import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ArticlesService } from './app/services/articles.service';
import { provideClientHydration, BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideClientHydration(),
        ArticlesService
    ]
})
  .catch(err => console.error(err));
