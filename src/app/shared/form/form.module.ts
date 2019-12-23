import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {ButtonComponent} from './button/button.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {FileInputComponent} from './file-input/file-input.component';
import {InputComponent} from './input/input.component';
import {SelectModule} from './select/select.module';
import {FromControlDescDirective} from './form-control/form-control-desc.directive';
import {FromControlLabelDirective} from './form-control/form-control-label.directive';
import {InputErrorDirective} from './input-error/input-error.directive';
import {IconModule} from '../icon/icon.module';
import { TextareaComponent } from './textarea/textarea.component';


@NgModule({
    declarations: [
        ButtonComponent,
        CheckboxComponent,
        FileInputComponent,
        InputComponent,
        InputErrorDirective,
        FromControlLabelDirective,
        FromControlDescDirective,
        TextareaComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        IconModule,
        FormsModule,
    ],
    exports: [
        ButtonComponent,
        CheckboxComponent,
        FileInputComponent,
        SelectModule,
        InputComponent,
        InputErrorDirective,
        FromControlDescDirective,
        FromControlLabelDirective,
        TextareaComponent
    ]
})

export class FormModule {}
