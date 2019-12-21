import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExpandableDirective} from './expandable.directive';


@NgModule({
    declarations: [ExpandableDirective],
    imports: [
        CommonModule
    ],
    exports: [
        ExpandableDirective
    ]
})
export class ExpandableModule {}
