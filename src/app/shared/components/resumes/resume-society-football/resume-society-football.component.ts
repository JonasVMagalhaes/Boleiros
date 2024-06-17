import { Component, Input } from '@angular/core';

import { ResumeSocietyFootball } from '../models/resume-society-football.interface';
import { ResumeSportsImpl } from '../models/resume-sports-impl.interface';
import { ResumeSports } from '../models/resume-sports.interface';

@Component({
  selector: 'app-resume-society-football',
  templateUrl: './resume-society-football.component.html',
  styleUrl: './resume-society-football.component.scss'
})
export class ResumeSocietyFootballComponent implements ResumeSportsImpl<ResumeSocietyFootball> {
  @Input({ required: true }) matchs: ResumeSports<ResumeSocietyFootball>[];
}
