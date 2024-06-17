import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { ResumeSocietyFootballComponent } from './resume-society-football/resume-society-football.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ResumeSocietyFootballComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [ResumeSocietyFootballComponent]
})
export class ResumesModule { }
