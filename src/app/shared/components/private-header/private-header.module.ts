import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PrivateHeaderComponent } from './private-header.component';

@NgModule({
  declarations: [PrivateHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [PrivateHeaderComponent]
})
export class PrivateHeaderModule { }
