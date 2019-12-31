import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';

import {CoreModule} from '../../core.module';
import {Message} from './message.model';
import {MessageHandlerService} from '../../backend/message/message-handler.service';


@Injectable({
  providedIn: CoreModule
})
export class MessageService {
  handler = this.messageHandler;

  constructor(private messageHandler: MessageHandlerService) {}

  async sendMessage(message: Message) {
    try {
      return await this.handler.sendMessage(message.email, 'message', message.text, message.name);
    } catch (e) {
      throwError(e);
    }
  }
}
