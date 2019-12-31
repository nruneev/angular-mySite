import { Injectable } from '@angular/core';
import {CoreModule} from '../../core.module';
import {throwError} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: CoreModule
})
export class MessageHandlerService {
  isSend = false;

  constructor(private http: HttpClient) {
  }

  sendMessage(to: string, subjects: string, type: string, text: string, name: string) {
    try {
      const url = '/php/send.php?to="' + name + '"&mail_to="' + to + '"&subject="' + subjects + '"&message="' + text + '"';
      this.http.post(url, {}).subscribe(_ => this.isSend = true);
      return this.isSend;
    } catch (e) {
      throwError(e);
      return this.isSend;
    }
  }
}
