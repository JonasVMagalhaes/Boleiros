import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastComponent } from './toast/toast.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule],
  providers: [MessageService],
  exports: [ToastComponent]
})
export class MessageModule { }
