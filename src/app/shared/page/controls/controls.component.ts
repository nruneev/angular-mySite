import {Component, ChangeDetectionStrategy} from '@angular/core';


@Component({
    selector: 'af-page-controls',
    template: '<ng-content></ng-content>',
    styleUrls: ['./controls.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageControlsComponent {}
