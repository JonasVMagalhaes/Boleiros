import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageItemComponent } from './message-item/message-item.component';
import { ToastComponent } from './toast/toast.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    ToastComponent,
    MessageItemComponent
  ],
  imports: [CommonModule],
  providers: [MessageService],
  exports: [ToastComponent]
})
export class MessageModule { }
