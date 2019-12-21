import {Component, ChangeDetectionStrategy, Input} from '@angular/core';


@Component({
    selector: 'nr-stopwatch',
    templateUrl: './stopwatch.component.html',
    styles: [':host { display: inline; }'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StopwatchComponent {
  @Input() hours: string;
  @Input() minutes: string;
  @Input() seconds: string;
}
