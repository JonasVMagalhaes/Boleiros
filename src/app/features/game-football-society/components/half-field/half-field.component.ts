import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-half-field',
  templateUrl: './half-field.component.html',
  styleUrl: './half-field.component.scss'
})
export class HalfFieldComponent {
  @Input() invert: boolean;
}
