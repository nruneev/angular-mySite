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

  sendMessage(to: string, subject: string, type: string, text: string, name: string) {
    let params = new HttpParams();
    params = params.append('to', to);
    params = params.append('subject', subject);
    params = params.append('type', type);
    params = params.append('text', text);
    params = params.append('name', name);
    try {
      this.http.get('/php/email.php').subscribe(_ => this.isSend = true);
      return this.isSend;
    } catch (e) {
      throwError(e);
      return this.isSend;
    }
  }
}
