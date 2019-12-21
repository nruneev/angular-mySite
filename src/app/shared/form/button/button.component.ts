import {ChangeDetectionStrategy, Component, Input} from '@angular/core';


@Component({
    selector: 'a[nrBtn], button[nrBtn]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input('wmBtn') type: 'basic' | 'primary' | 'link';
}
