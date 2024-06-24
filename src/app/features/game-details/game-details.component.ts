import { Component, Input } from '@angular/core';

import { GameDetails } from './models/game-details.interface';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  @Input({ required: true }) gameDetails: GameDetails = {
    players: [
      { name: "Jonas", position: "Goleiro", confirmatedAttendance: true },
      { name: "Moisés", position: "Zagueiro", confirmatedAttendance: false },
      { name: "Wilker", position: "Zagueiro", confirmatedAttendance: true },
      { name: "Vanderson", position: "Zagueiro", confirmatedAttendance: true },
      { name: "Adenilson", position: "Ponta esquerda", confirmatedAttendance: false },
      { name: "Felipe", position: "Atacante", confirmatedAttendance: false },
      { name: "João", position: "Ponta direita", confirmatedAttendance: true }
    ]
  } 
}
