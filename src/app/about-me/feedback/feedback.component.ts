import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Table} from '../../shared/table';
import {FeedbackQuery} from '../../core/state/feedback/feedback.query';
import {Feedback} from '../../core/state/feedback/feedback.model';
import {FeedbackService} from '../../core/state/feedback/feedback.service';


@Component({
  selector: 'nr-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['../about-me.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbacks: Subscription;
  table: Table;

  constructor(private query: FeedbackQuery,
              private service: FeedbackService,
              private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.feedbacks = this.query.selectAll().subscribe(this.createTable.bind(this));
  }

  createTable(feedback: Feedback[]) {
    this.table  = {
      headerGroups: [
        {headers: [
            '№', 'Name', 'Email', 'Feedback'
          ]}
      ],
      rowGroups: [
        {
          rows: feedback.map((item, index) => [
            index + 1,
            item.name,
            item.email,
            item.feedback
          ])
        }
      ]
    };
    this.cd.markForCheck();
  }
}
