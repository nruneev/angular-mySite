import {NgModule} from '@angular/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SelectComponent} from './select.component';
import {SelectItemDirective} from './select-item/select-item.directive';

@NgModule({
    declarations: [SelectComponent, SelectItemDirective],
    imports: [
        CommonModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [SelectComponent, SelectItemDirective]
})
export class SelectModule {}
