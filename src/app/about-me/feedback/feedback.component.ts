import {Component} from '@angular/core';


@Component({
  selector: 'nr-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['../about-me.component.scss']
})
export class FeedbackComponent {
  table = {
    headerGroups: [
      {headers: [
          '№', 'Name', 'Email', 'Feedback'
        ]}
    ],
    rowGroups: [
      {
        rows: [
          ['1', 'Ника Шлендер', '-', 'Отличный исполнитель, согласовали то, что хотела видеть, и получил на выходе именно это. Рекомендую Всем!'],
          ['2', 'Тимур Романченко', 'tim45250@gmail.com', 'Сотрудничали с Никитой по проекту "Дневники истории VK", Никита полностью выполнил все работы по ТЗ и предложил ряд интересных новшеств, которые сам же и реализовал. У Никиты хорошие знания клиентской части web приложений и желание работать. Будем рады продолжить с ним сотрудничество']
        ]
      }
    ]
  };
}
