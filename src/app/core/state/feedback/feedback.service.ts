import { Injectable } from '@angular/core';
import {CoreModule} from '../../core.module';
import {FeedbackStore} from './feedback.store';
import {MessageHandlerService} from '../../backend/message/message-handler.service';
import {Feedback} from './feedback.model';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: CoreModule
})
export class FeedbackService {
  handler = this.messageHandler;

  constructor(private store: FeedbackStore,
              private messageHandler: MessageHandlerService) {
    this.store.add([
      {
        id: 0,
        name: 'Ника Шлендер',
        email: '-',
        feedback: 'Отличный исполнитель, согласовали то, что хотела видеть, и получил на выходе именно это. Рекомендую Всем!'
      },
      {
        id: 1,
        name: 'Тимур Романченко',
        email: 'tim45250@gmail.com',
        feedback: 'Сотрудничали с Никитой по проекту "Дневники истории VK", Никита полностью выполнил все работы по ТЗ и предложил ряд интересных новшеств, которые сам же и реализовал. У Никиты хорошие знания клиентской части web приложений и желание работать. Будем рады продолжить с ним сотрудничество'
      }
    ]);
  }

  async sendFeedback(feedback: Feedback) {
    const subject = 'Спасибо, что оставили отзыв на сайте "Front-end developer Nikita Runeev"';
    try {
      return await this.handler.sendMessage(feedback.email, subject, 'feedback', feedback.feedback, feedback.name);
    } catch (e) {
      throwError(e);
    }
  }
}
