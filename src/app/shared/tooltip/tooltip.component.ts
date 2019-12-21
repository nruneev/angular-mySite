import {Component, ElementRef, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from '@angular/core';

import {Placement} from './placement.enum';
import {timer} from 'rxjs';


@Component({
    selector: 'nr-tooltip',
    template: `
    <div class="content">{{content}}</div>
    <div class="arrow"></div>
  `,
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {

    @HostBinding('style.visibility') styleVisibility: string;
    @HostBinding('style.top') styleTop: string;
    @HostBinding('style.left') styleLeft: string;

    @HostBinding('attr.placement') placement: Placement;

    content: string;
    attachedElement: ElementRef<HTMLElement>;

    constructor(
            private element: ElementRef<HTMLElement>,
            private cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
        timer().subscribe(() => this.open());
    }

    private open() {
        const position = this.calculate();
        this.setStyles(position.top, position.left);
    }

    private calculate(): { top: number, left: number } {
        const elementRect = this.element.nativeElement.getBoundingClientRect();
        const attachRect = this.attachedElement.nativeElement.getBoundingClientRect();

        let top = attachRect.top - elementRect.height;
        let left = (attachRect.left + attachRect.width / 2) - (elementRect.width / 2);
        this.placement = Placement.top;

        if (this.isOutScreenTop(elementRect, attachRect)) {
            this.placement = Placement.bottom;
            top = attachRect.top + attachRect.height;
        }

        return {top, left};
    }

    private isOutScreenTop(elementRect: ClientRect, attachRect: ClientRect) {
        return attachRect.top - elementRect.height < 0;
    }

    private setStyles(top: number, left: number) {
        const scrollElement = document.documentElement;

        this.styleVisibility = 'visible';
        this.styleLeft = `${left + scrollElement.scrollLeft}px`;
        this.styleTop = `${top + scrollElement.scrollTop}px`;

        this.cd.markForCheck();
    }
}
