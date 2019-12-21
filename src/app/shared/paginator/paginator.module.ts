import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {PaginatorComponent} from './paginator.component';
import {IconModule} from '../icon/icon.module';


@NgModule({
    declarations: [PaginatorComponent],
    imports: [
        CommonModule,
        IconModule,
        RouterModule
    ],
    exports: [PaginatorComponent]
})
export class PaginatorModule {}
