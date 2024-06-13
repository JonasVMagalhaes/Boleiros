import { Routes } from '@angular/router';

import { RouteEnum } from '@enums/routes/route.enum';
import { GameComponent } from '@features/game/game.component';
import { HomeComponent } from '@features/home/home.component';
import { LoginComponent } from '@features/login/login.component';
import { RecoveryPasswordComponent } from '@features/recovery-password/recovery-password.component';
import { RegisterGameComponent } from '@features/register-game/register-game.component';
import { RegisterComponent } from '@features/register/register.component';
import { ResetPasswordComponent } from '@features/reset-password/reset-password.component';
import { TeamComponent } from '@features/team/team.component';
import { publicRouteGuard } from './shared/guards/public-route.guard';
import { privateRouteGuard } from './shared/guards/private-route.guard';

export const routes: Routes = [
    {
        path: RouteEnum.EMPTY,
        pathMatch: 'full',
        component: LoginComponent,
        canActivate: [publicRouteGuard]
    },
    {
        path: RouteEnum.LOGIN,
        redirectTo: RouteEnum.EMPTY
    },
    {
        path: RouteEnum.HOME,
        component: HomeComponent,
        canActivate: [privateRouteGuard]
    },
    {
        path: RouteEnum.TEAM,
        component: TeamComponent
    },
    {
        path: RouteEnum.REGISTER, component: RegisterComponent
    },
    { 
        path: RouteEnum.REGISTER_GAME, component: RegisterGameComponent
    },
    { 
        path: RouteEnum.GAME, component: GameComponent
    },
    { 
        path: RouteEnum.RECOVERY_PASSWORD, component: RecoveryPasswordComponent
    },
    { 
        path: RouteEnum.RESET_PASSWORD, component: ResetPasswordComponent
    }
];
