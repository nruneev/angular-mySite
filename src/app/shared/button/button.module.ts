import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToggleDirective} from './toggle.directive';
import {ToggleExpandableDirective} from './toggle-expandable.directive';


@NgModule({
    declarations: [ToggleDirective, ToggleExpandableDirective],
    imports: [CommonModule],
    exports: [ToggleDirective, ToggleExpandableDirective]
})
export class ButtonModule {}
