import { Routes } from '@angular/router';
import { RouteEnum } from '@enums/routes/route.enum';

import { GameComponent } from '@features/game/game.component';
import { HomeComponent } from '@features/home/home.component';
import { RegisterGameComponent } from '@features/register-game/register-game.component';
import { TeamComponent } from '@features/team/team.component';

export const privateRoutes: Routes = [
  {
    path: RouteEnum.HOME,
    component: HomeComponent,
  },
  {
    path: RouteEnum.TEAM,
    component: TeamComponent,
  },
  {
    path: RouteEnum.REGISTER_GAME,
    component: RegisterGameComponent,
  },
  {
    path: RouteEnum.GAME,
    component: GameComponent,
  },
];
