import { Injectable } from '@angular/core';
import {CoreModule} from '../../core.module';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class MessageHandlerService {
  async sendMessage(to: string, subject: string, type: string, text: string, name: string) {
    try {
      const response = await fetch('../php/email.php', {
        method: 'POST',
        body: JSON.stringify([to, subject, type, text, name]),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const myJson = await response.json();
      console.log(JSON.stringify(myJson));
      return response.ok;
    } catch (e) {
      throwError(e);
    }
  }
}
