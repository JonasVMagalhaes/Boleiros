import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { SharedModule } from 'app/shared/shared.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { GameFootballSocietyModule } from './game-football-society/game-football-society.module';
import { RegisterGameModule } from './register-game/register-game.module';

@NgModule({
    imports: [
        SharedModule,
        LoginModule,
        HomeModule,
        RegisterGameModule,
        GameFootballSocietyModule
    ],
    providers: [],
    exports: [SharedModule]
})
export class FeaturesModule { }
