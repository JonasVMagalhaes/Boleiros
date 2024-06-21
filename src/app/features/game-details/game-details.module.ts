import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailsComponent } from './game-details.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [GameDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [GameDetailsComponent]
})
export class GameDetailsModule { }
