import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FeedbackQuery} from '../../core/state/feedback/feedback.query';
import {Subscription} from 'rxjs';
import {Table} from '../../shared/table';
import {FeedbackService} from '../../core/state/feedback/feedback.service';
import {Feedback} from '../../core/state/feedback/feedback.model';

@Component({
  selector: 'nr-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
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
