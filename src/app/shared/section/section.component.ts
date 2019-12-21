import {Component, ChangeDetectionStrategy} from '@angular/core';


@Component({
    selector: 'nr-section-sm, nr-section-md, nr-section-lg',
    template: '<ng-content></ng-content>',
    styleUrls: ['./section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {}
