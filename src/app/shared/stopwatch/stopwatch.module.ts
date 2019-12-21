import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StopwatchComponent} from './stopwatch.component';


@NgModule({
    declarations: [StopwatchComponent],
    imports: [CommonModule],
    exports: [StopwatchComponent]
})
export class StopwatchModule {}
