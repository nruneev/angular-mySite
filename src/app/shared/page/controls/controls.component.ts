import {Component, ChangeDetectionStrategy} from '@angular/core';


@Component({
    selector: 'nr-page-controls',
    template: '<ng-content></ng-content>',
    styleUrls: ['./controls.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageControlsComponent {}
