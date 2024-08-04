import { Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [HeaderComponent, MainComponent, ContactComponent]
})
export class AppComponent {
  title = 'techblog';
}
