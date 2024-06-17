import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { GameFootballSocietyModule } from './game-football-society/game-football-society.module';

@NgModule({
    imports: [
        SharedModule,
        LoginModule,
        HomeModule,
        GameFootballSocietyModule
    ],
    exports: [SharedModule]
})
export class FeaturesModule { }
