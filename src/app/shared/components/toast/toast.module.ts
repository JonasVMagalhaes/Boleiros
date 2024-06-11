import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastService } from './services/toast.service';
import { ToastComponent } from './toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule],
  providers: [ToastService],
  exports: [ToastComponent]
})
export class ToastModule { }
