import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerIconComponent } from './player-icon.component';

@NgModule({
  declarations: [PlayerIconComponent],
  imports: [
    CommonModule
  ],
  exports: [PlayerIconComponent]
})
export class PlayerIconModule { }
