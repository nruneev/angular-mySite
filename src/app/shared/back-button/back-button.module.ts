import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {BackButtonComponent} from './back-button.component';


@NgModule({
  declarations: [BackButtonComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [BackButtonComponent]
})
export class BackButtonModule { }
