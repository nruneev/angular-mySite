import {ChangeDetectionStrategy, Component, Input, HostBinding} from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

import {FormControlBase} from '../form-control/form-control-base';


@Component({
    selector: 'nr-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss', '../form-control/form-style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class CheckboxComponent extends FormControlBase {
    private chackboxName: string;

    @HostBinding('attr.name') attrName: string;

    @Input()
    set name(value: string) {
        this.chackboxName = value;
        this.attrName = value;
    }

    get name(): string {
        return this.chackboxName;
    }
}
