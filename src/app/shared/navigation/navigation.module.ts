import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CdkTreeModule} from '@angular/cdk/tree';

import {ButtonModule} from '../button/button.module';
import {ExpandableModule} from '../expandable/expandable.module';

import {TreeNavComponent} from './tree-nav/tree-nav.component';
import {NavItemDirective} from './core/nav-item.directive';
import {NavItemDefDirective} from './core/nav-item-def.directive';

@NgModule({
    declarations: [
        TreeNavComponent,
        NavItemDirective,
        NavItemDefDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        ExpandableModule,
        CdkTreeModule
    ],
    exports: [TreeNavComponent, NavItemDirective, NavItemDefDirective]
})
export class NavigationModule {}
