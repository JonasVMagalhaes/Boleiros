import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { PrivateHeaderComponent } from './private-header.component';
import { PrivateHeaderService } from './private-header.service';
import { PrivateHeaderSubsService } from './services/private-header-subs.service';

@NgModule({
  declarations: [PrivateHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    PrivateHeaderService,
    PrivateHeaderSubsService
  ],
  exports: [PrivateHeaderComponent]
})
export class PrivateHeaderModule { }
