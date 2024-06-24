import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { GameDetailsComponent } from './game-details.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [GameDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [GameDetailsComponent]
})
export class GameDetailsModule { }
