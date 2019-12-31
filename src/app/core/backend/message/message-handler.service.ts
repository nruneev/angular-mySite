import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {CoreModule} from '../../core.module';


@Injectable({
  providedIn: CoreModule
})
export class MessageHandlerService {
  isSend = false;

  constructor(private http: HttpClient) {
  }

  async sendMessage(to: string, type: string, text: string, name: string) {
    try {
      const url = '/php/send.php?to=' + name + '&mail_to=' + to + '&message=' + text + '&type=' + type;
      await this.http.post(url, {}).subscribe(_ => this.isSend = true);
      return this.isSend;
    } catch (e) {
      throwError(e);
      return this.isSend;
    }
  }
}
