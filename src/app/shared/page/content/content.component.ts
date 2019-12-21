import {Component, ChangeDetectionStrategy} from '@angular/core';


@Component({
    selector: 'nr-page-content',
    template: '<ng-content></ng-content>',
    host: {
        '[attr.role]': '"article"'
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContentComponent {}
