import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { GameFootballSocietyModule } from './game-football-society/game-football-society.module';
import { RegisterGameModule } from './register-game/register-game.module';
import { PlayerModule } from './player/player.module';

@NgModule({
    imports: [
        SharedModule,
        LoginModule,
        HomeModule,
        RegisterGameModule,
        GameFootballSocietyModule,
        PlayerModule
    ],
    providers: [],
    exports: [SharedModule]
})
export class FeaturesModule { }
