import { RouteEnum } from '@enums/routes/route.enum';
import { GameDetailsComponent } from '@features/game-details/game-details.component';
import { GameFootballSocietyComponent } from '@features/game-football-society/game-football-society.component';
import { HomeComponent } from '@features/home/home.component';
import { PlayerComponent } from '@features/player/player.component';
import { RegisterGameComponent } from '@features/register-game/register-game.component';
import { TeamComponent } from '@features/team/team.component';

export const privateRoutes = [
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
    component: GameFootballSocietyComponent,
  },
  {
    path: RouteEnum.GAME_DETAILS,
    children: [
      { path: ":id", component: GameDetailsComponent }
    ]
  },
  {
    path: RouteEnum.PLAYER,
    children: [
      { path: ":id", component: PlayerComponent }
    ]
  },
]
