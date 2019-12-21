import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';


@Component({
    selector: 'nr-header',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @HostBinding('attr.role') role = 'banner';
}
