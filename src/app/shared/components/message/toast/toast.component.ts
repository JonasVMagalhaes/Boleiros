import { Component } from '@angular/core';

import { Message } from '../models/message.interface';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  readonly toastMessages: Message[] = [
    { severity: '', message: '123', summary: '123' },
    { severity: '', message: '124', summary: '256' }
  ];
}
  