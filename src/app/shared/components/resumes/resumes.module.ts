import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeSocietyFootballModule } from './resume-society-football/resume-society-football.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    ResumeSocietyFootballModule
  ]
})
export class ResumesModule { }
