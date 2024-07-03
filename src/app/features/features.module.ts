import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { GameFootballSocietyModule } from './game-football-society/game-football-society.module';
import { RegisterGameModule } from './register-game/register-game.module';
import { PlayerModule } from './player/player.module';
import { GameDetailsModule } from './game-details/game-details.module';
import { RegisterModule } from './register/register.module';

@NgModule({
    imports: [
        SharedModule,
        LoginModule,
        RegisterModule,
        HomeModule,
        RegisterGameModule,
        GameFootballSocietyModule,
        PlayerModule,
        GameDetailsModule
    ],
    providers: [],
    exports: [SharedModule]
})
export class FeaturesModule { }
