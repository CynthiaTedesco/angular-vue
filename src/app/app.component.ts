import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Import FooterComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent], // Import the child components here
})
export class AppComponent {
  title = 'Angular App';
  year = 2025;
}
