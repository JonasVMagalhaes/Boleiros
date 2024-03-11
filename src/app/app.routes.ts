import { Routes } from '@angular/router';

import { RouteEnum } from '@enums/routes/route.enum';
import { LoginComponent } from '@features/login/login.component';
import { RecoveryPasswordComponent } from '@features/recovery-password/recovery-password.component';
import { RegisterComponent } from '@features/register/register.component';
import { TeamComponent } from '@features/team/team.component';

export const routes: Routes = [
    { path: RouteEnum.EMPTY, pathMatch: 'full', component: LoginComponent },
    { path: RouteEnum.LOGIN, redirectTo: RouteEnum.EMPTY },
    { path: RouteEnum.LOGIN, redirectTo: RouteEnum.EMPTY },
    { path: RouteEnum.HOME, redirectTo: RouteEnum.TEAM },
    { path: RouteEnum.TEAM, component: TeamComponent },
    { path: RouteEnum.REGISTER, component: RegisterComponent },
    { path: RouteEnum.RECOVERY_PASSWORD, component: RecoveryPasswordComponent }
];
