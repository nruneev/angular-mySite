import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';

import {Feedback} from './feedback.model';
import {CoreModule} from '../../core.module';


export interface FeedbackState extends EntityState<Feedback> {}

@Injectable({providedIn: CoreModule})
@StoreConfig({ name: 'feedback' })
export class FeedbackStore extends EntityStore<FeedbackState, Feedback> {
  constructor() {
    super();
  }
}

