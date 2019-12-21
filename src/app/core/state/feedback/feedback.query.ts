import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { FeedbackStore, FeedbackState } from './feedback.store';
import {CoreModule} from '../../core.module';
import {Feedback} from './feedback.model';


@Injectable({providedIn: CoreModule})
export class FeedbackQuery extends QueryEntity<FeedbackState, Feedback> {
  constructor(protected store: FeedbackStore) {
    super(store);
  }
}
