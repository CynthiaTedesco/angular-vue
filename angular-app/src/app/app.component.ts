import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
} from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Import FooterComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements AfterViewInit {
  title = 'app.component.ts';
  year = 2025;

  ngAfterViewInit() {
    // Dynamically load the Vue components script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = './assets/vue/index-vue.js';
    document.head.appendChild(script);

    script.onload = () => {
      // Now the Vue custom elements are defined, Angular should work with them
      console.log('Vue components loaded and ready');
    };
  }
}
