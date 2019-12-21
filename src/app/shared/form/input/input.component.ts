import {ChangeDetectionStrategy, Component, Input, ElementRef, OnInit, OnDestroy, ChangeDetectorRef, HostBinding} from '@angular/core';
import {ControlContainer, FormGroupDirective, ValidationErrors} from '@angular/forms';
import {untilDestroyed} from 'ngx-take-until-destroy';

import {FormControlBase} from '../form-control/form-control-base';


@Component({
    selector: 'nr-input-text, nr-input-email, nr-input-password, nr-input-number',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss', '../form-control/form-style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class InputComponent extends FormControlBase implements OnInit, OnDestroy {
    @Input() name: string;
    @Input() placeholder = '';

    @HostBinding('attr.appearance')
    @Input() appearance: 'standard' | 'outline' = 'outline';

    @HostBinding('attr.empty')
    empty = true;

    @HostBinding('attr.focus')
    focus = false;

    invalid: ValidationErrors | null;

    get type(): string {
        const tagName = this.element.nativeElement.tagName as string;

        switch (tagName.toLowerCase()) {
            case 'nr-input-email':
                return 'email';
            case 'nr-input-password':
                return 'password';
            case 'nr-input-number':
                return 'number';
        }

        return 'text';
    }

    constructor(private element: ElementRef,
                private cd: ChangeDetectorRef,
                private parentFormControl: FormGroupDirective) {
        super();
    }

    ngOnInit() {
        this.parentFormControl.control.controls[this.name].statusChanges
        .pipe(untilDestroyed(this))
        .subscribe(res => {
            const control = this.parentFormControl.control.controls[this.name];
            const isError = control.invalid && (control.dirty || control.touched);

            this.empty = control.value === '';

            this.invalid = isError ? control.errors : null;

            this.cd.markForCheck();
        });
    }

    ngOnDestroy() {}
}
