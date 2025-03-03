import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass',
  standalone: true,
})
export class FooterComponent {
  @Input() year: number | null = null;
}
