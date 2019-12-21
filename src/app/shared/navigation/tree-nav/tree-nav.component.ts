import {
    AfterContentChecked,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    OnChanges,
    QueryList,
    SimpleChanges,
    TemplateRef
} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {NestedTreeControl} from '@angular/cdk/tree';

import {CanExpand, CanExpandCtor, mixinExpand} from '../../core/behaviors/expandable';
import {NavItem} from '../core/nav-item.model';
import {NavItemDefDirective, NavItemContext} from '../core/nav-item-def.directive';


class NavigationBase {}

const _NavigationMixinBase: CanExpandCtor & typeof NavigationBase = mixinExpand(NavigationBase);

@Component({
    selector: 'nr-tree-nav',
    templateUrl: './tree-nav.component.html',
    styleUrls: ['./tree-nav.component.scss'],
    inputs: ['expanded', 'navItems'],
    host: {
        '[attr.role]': '"navigation"',
        '[attr.aria-expanded]': 'expanded',
        '[attr.expanded]': 'expanded'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNavComponent<T> extends _NavigationMixinBase implements CanExpand, OnChanges, AfterContentChecked {
    navItems: NavItem<T>[];
    treeControl = new NestedTreeControl<NavItem<T>>(node => node.children);

    @ContentChildren(NavItemDefDirective, {}) itemDefs: QueryList<NavItemDefDirective<T>>;

    private defaultItemDef: NavItemDefDirective<T> | null;

    isSection = (_: number, item: NavItem<T>) => !!item.children && item.children.length > 0;

    trackBy = (_: number, item: NavItem<T>) => item.id;

    constructor(private sanitizer: DomSanitizer) { super(); }

    ngOnChanges(changes: SimpleChanges): void {
        this.treeControl.dataNodes = this.navItems;

        if (changes.expanded) {
            const expanded = changes.expanded.currentValue as boolean;

            expanded ? this.treeControl.expandAll() : this.treeControl.collapseAll();
        }
    }

    ngAfterContentChecked() {
        this.defaultItemDef = this.itemDefs.filter(def => !def.when)[0];
    }

    asNavigationItem(val): NavItem<T> {
        return val;
    }

    getTemplate(item: NavItem<T>, level: number): TemplateRef<NavItemContext<T>> {
        const itemDef = this.itemDefs.find(def => def.when && def.when(item, level)) || this.defaultItemDef;
        return itemDef.template;
    }

    sanitizeStyle(style: string): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}

