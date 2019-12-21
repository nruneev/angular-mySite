import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';
import {untilDestroyed} from 'ngx-take-until-destroy';

import {FormControlBase} from '../form-control/form-control-base';


@Component({
    selector: 'nr-file-input',
    templateUrl: './file-input.component.html',
    styleUrls: ['./file-input.component.scss', '../form-control/form-style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class FileInputComponent extends FormControlBase implements OnInit, OnDestroy {
    @Input() name: string;
    @Input() loading: boolean;
    @Output() changeFile = new EventEmitter<File>();

    fileName: string;
    image: string;

    constructor(private parentFormControl: FormGroupDirective) { super(); }

    ngOnInit() {
        const control = this.parentFormControl.control.controls[this.name];

        this.image = control.value;

        control.statusChanges.pipe(untilDestroyed(this)).subscribe(() => this.image = control.value);
    }

    ngOnDestroy() {}

    change(event) {
        const file = event.target.files[0] as File;

        this.fileName = file.name;
        this.changeFile.emit(file);
    }
}
