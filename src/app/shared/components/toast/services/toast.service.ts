import { Injectable } from '@angular/core';

import { UUID } from '@utils/uuid/uuid-utils';
import { Toast } from '../models/toast.interface';

interface ToastItem extends Toast {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public toasts: Toast[] = [];
  public timeDurationToast: number = 3000;
  
  toast(toast: Toast): void {
    const id = UUID.generate();
    const messageWidthId: ToastItem = Object.assign(toast, { id });

    this.toasts.push(toast);
    this.setTimeToRemoveToast(messageWidthId);
  }

  private setTimeToRemoveToast(toast: ToastItem): void {
    if(this.timeDurationToast) {
      setTimeout(() => {
        this.castToastToastsToToastItem()
          .forEach((item: ToastItem, index) => item.id === toast.id && this.toasts.splice(index, 1));
      }, this.timeDurationToast);
    }
  }

  private castToastToastsToToastItem(): ToastItem[] {
    return this.toasts as ToastItem[];
  }
}

