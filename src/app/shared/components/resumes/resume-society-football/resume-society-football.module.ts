import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeSocietyFootballComponent } from './resume-society-football.component';
import { ResumeSocietyFootballHeaderComponent } from './components/resume-society-football-header/resume-society-football-header.component';
import { ExpansionPanelModule } from '@components/expansion-panel/expansion-panel.module';
import { MatIconModule } from '@angular/material/icon';
import { ResumeSocietyFootballDescriptionComponent } from './components/resume-society-football-description/resume-society-football-description.component';

@NgModule({
  declarations: [
    ResumeSocietyFootballComponent,
    ResumeSocietyFootballHeaderComponent,
    ResumeSocietyFootballDescriptionComponent
  ],
  imports: [
    CommonModule,
    ExpansionPanelModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    ResumeSocietyFootballComponent,
    ResumeSocietyFootballHeaderComponent,
  ],
})
export class ResumeSocietyFootballModule {}
