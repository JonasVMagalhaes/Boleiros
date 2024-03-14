import { Component, Input } from '@angular/core';

import { Message } from '../models/message.interface';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.scss'
})
export class MessageItemComponent {
  @Input({ required: true }) message: Message;
}
