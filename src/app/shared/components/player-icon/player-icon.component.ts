import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-icon',
  templateUrl: './player-icon.component.html',
  styleUrl: './player-icon.component.scss'
})
export class PlayerIconComponent {
  @Input() invert: boolean;
  @Input() attendanceConfirmed: boolean;
}
