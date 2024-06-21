import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ResumeSocietyFootball } from '../models/resume-society-football.interface';
import { ResumeSportsImpl } from '../models/resume-sports-impl.interface';
import { ResumeSports } from '../models/resume-sports.interface';
import { RouteEnum } from '@enums/routes/route.enum';

@Component({
  selector: 'app-resume-society-football',
  templateUrl: './resume-society-football.component.html',
  styleUrl: './resume-society-football.component.scss'
})
export class ResumeSocietyFootballComponent implements ResumeSportsImpl<ResumeSocietyFootball> {
  protected readonly RouteEnum = RouteEnum;
  
  @Input({ required: true }) matchs: ResumeSports<ResumeSocietyFootball>[];

  constructor(private readonly router: Router) {}

  goTo(path: RouteEnum, id: string): void {
    this.router.navigate([path, id]);
  }
}
