import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './player.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PlayerModule { }
