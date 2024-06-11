import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss',
    './styles/button-directives.scss',
  ]
})
export class ButtonComponent {
  @Input({ required: true }) id: string;
  @Input({ required: true }) label: string;
}
