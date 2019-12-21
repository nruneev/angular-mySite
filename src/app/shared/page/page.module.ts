import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageComponent} from './page.component';
import {PageControlsComponent} from './controls/controls.component';
import {PageContentComponent} from './content/content.component';
import {BackButtonModule} from '../back-button';


@NgModule({
    declarations: [
        PageComponent,
        PageContentComponent,
        PageControlsComponent,
    ],
  imports: [
    CommonModule,
    BackButtonModule
  ],
    exports: [
        PageComponent,
        PageContentComponent,
        PageControlsComponent
    ]
})
export class PageModule {}
