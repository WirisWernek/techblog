import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ArticlesService } from './services/articles.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ContactComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration(),
	ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
