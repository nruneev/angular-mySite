import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation, ViewChild} from '@angular/core';
import {TreeNavComponent} from '../../shared/navigation/tree-nav/tree-nav.component';

import {NavigationItem} from '../../shared/dependent-types';


@Component({
    selector: 'agent-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom
})
export class SidenavComponent {
    private navExpanded = false;

    expandedMode = false;

    get expanded(): boolean {
        return this.navExpanded;
    }
    @Input()
    set expanded(val: boolean) {
        if (val) { this.expandedMode = true; }
        this.navExpanded = val;
    }

    @Input() navItems: NavigationItem[] = [];

    isRootLevel = (_: NavigationItem, level: number) => level === 0;

    asNavigationItem = (val: any): NavigationItem => val;

    transitionEnd() {
        if (!this.expanded) { this.expandedMode = false; }
    }

    onClickItem(event: MouseEvent, treeNav: TreeNavComponent<NavigationItem>) {
        const selfTreeNode = event.composedPath().find((elem: HTMLElement) => elem.hasAttribute('aria-expanded')) as HTMLElement;

        if (!this.expanded && selfTreeNode.getAttribute('aria-expanded') === 'false') {
            treeNav.treeControl.collapseAll();
        }
    }
}
