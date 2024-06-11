import { Injectable } from '@angular/core';

import { Message } from '@components/message/models/message.interface';
import { UUID } from '@utils/uuid/uuid-utils';

interface MessageItem extends Message {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: Message[] = [];
  public timeDurationToast: number = 3000;

  toast(message: Message): void {
    const id = UUID.generate();
    const messageWidthId: MessageItem = Object.assign(message, { id });

    this.messages.push(message);
    this.setTimeToRemoveMessage(messageWidthId);
  }

  private setTimeToRemoveMessage(message: MessageItem): void {
    if(this.timeDurationToast) {
      setTimeout(() => {
        this.castToastMessagesToMessageItem()
          .forEach((item: MessageItem, index) => item.id === message.id && this.messages.splice(index, 1));
      }, this.timeDurationToast);
    }
  }

  private castToastMessagesToMessageItem(): MessageItem[] {
    return this.messages as MessageItem[];
  }
}

