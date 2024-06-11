import { Component } from '@angular/core';

import { TransformYAnimation } from './animations/transform-y-animation';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  animations: [TransformYAnimation.get()],
})
export class ToastComponent {
  constructor(public readonly toastService: ToastService) {}
}
  