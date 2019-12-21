import {Directive, Input, TemplateRef} from '@angular/core';

import {NavItem} from './nav-item.model';

export interface NavItemContext<T> {
    $implicit: NavItem<T>;
    level: number;
}

@Directive({
    selector: '[nrNavItemDef]'
})
export class NavItemDefDirective<T> {
    @Input('nrNavItemDefWhen') when: (itemData: NavItem<T>, level: number) => boolean;

    constructor(public template: TemplateRef<NavItemContext<T>>) {}
}
