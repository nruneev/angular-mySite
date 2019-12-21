import {
    AfterViewChecked,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Input,
    Renderer2,
    ViewChild
} from '@angular/core';

import {SidebarState} from '../../core/state';
import {ExpandableState} from '../../shared/types';


@Component({
    selector: 'button[agentSidebarToggle]',
    template: `
        <span id="{{ariaLabelledBy}}" #sidebarToggleLabel i18n="@@sidebarToggle" hidden>
            {expandedState, select, expanded {Скрыть} other {Показать}} меню
        </span>
        <ng-content></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarToggleComponent implements AfterViewChecked {
    @Input('agentSidebarToggle') sidebarState: SidebarState = SidebarState.Compacted;

    @HostBinding('attr.aria-pressed')
    @HostBinding('attr.pressed')
    @HostBinding('attr.aria-expanded')
    get isExpanded(): boolean {
        return this.sidebarState === SidebarState.Expanded;
    }

    @HostBinding('attr.aria-labelledby') ariaLabelledBy = 'sidebar-toggle-label';

    get expandedState(): ExpandableState {
        return this.isExpanded ? 'expanded' : 'compacted';
    }

    @ViewChild('sidebarToggleLabel', {static: false}) labelRef: ElementRef;

    constructor(
        @Attribute('aria-controls') ariaControls: string,
        private containerRef: ElementRef,
        private renderer: Renderer2
    ) {
        if (!ariaControls) {
            throw new Error('You must set "aria-controls" attribute for SidebarToggle');
        }
    }

    ngAfterViewChecked(): void {
        const title = this.labelRef
            ? (this.labelRef.nativeElement as HTMLElement).textContent || ''
            : '';
        this.renderer.setAttribute(this.containerRef.nativeElement, 'title', title.trim());
    }
}
