import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
  standalone: true,
})
export class HeaderComponent {
  @Input() title: string = '';
}
