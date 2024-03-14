import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamService } from './services/team.service';
import { TeamStoreService } from './store/team-store.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [TeamService, TeamStoreService]
})
export class TeamModule { }
