import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageItemComponent } from './message-item/message-item.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    ToastComponent,
    MessageItemComponent
  ],
  imports: [CommonModule],
  exports: [ToastComponent]
})
export class MessageModule { }
