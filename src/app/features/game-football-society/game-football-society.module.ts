import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SharedModule } from 'app/shared/shared.module';
import { GameFootballSocietyComponent } from './game-football-society.component';
import { FieldComponent } from './components/field/field.component';
import { HalfFieldComponent } from './components/half-field/half-field.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        GameFootballSocietyComponent,
        FieldComponent,
        HalfFieldComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        DragDropModule
    ]
})
export class GameFootballSocietyModule { }
