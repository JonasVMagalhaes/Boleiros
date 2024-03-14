import { Component } from '@angular/core';

import { ToastMessage } from './models/toast-message.interface';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  readonly toastMessages: ToastMessage[] = [
    { severity: '', message: '123', summary: '123' },
    { severity: '', message: '124', summary: '256' }
  ];
}
