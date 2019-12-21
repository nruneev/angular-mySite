import {Directive, HostBinding, ElementRef, OnInit, ChangeDetectorRef} from '@angular/core';
import {timer} from 'rxjs/internal/observable/timer';


@Directive({
    selector: 'nr-fc-desc'
})
export class FromControlDescDirective implements OnInit {
    private controlId: string;

    @HostBinding('attr.id')
    get id(): string {
        return this.controlId ? this.controlId + '-desc' : '';
    }

    constructor(
            private element: ElementRef<HTMLElement>,
            private cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
        const parent = this.element.nativeElement.parentElement as HTMLElement;
        const name = parent.getAttribute('name') as string;

        timer().subscribe(() => {
            const formElement = parent.querySelector(`[name="${name}"]`) as HTMLElement;
            this.controlId = formElement ? formElement.id : '';
            this.cd.markForCheck();
        });
    }
}
