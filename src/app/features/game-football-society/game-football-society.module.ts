import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { GameFootballSocietyComponent } from './game-football-society.component';

@NgModule({
    declarations: [
        GameFootballSocietyComponent,
    ],
    imports: [SharedModule],
    exports: [
        
    ]
})
export class GameFootballSocietyModule { }
