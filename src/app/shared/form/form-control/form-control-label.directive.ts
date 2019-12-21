import {Directive, HostBinding, OnInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {FormGroupDirective, AbstractControl} from '@angular/forms';
import {timer} from 'rxjs/internal/observable/timer';


@Directive({
    selector: 'nr-fc-label'
})
export class FromControlLabelDirective implements OnInit {
    private name: string;
    private parent: HTMLElement;
    private controlId: string;

    @HostBinding('attr.id')
    get id(): string {
        return this.controlId ? this.controlId + '-label' : '';
    }

    @HostBinding('attr.for')
    get for(): string {
        return this.controlId ? this.controlId : '';
    }

    @HostBinding('attr.withDesc')
    get withDesc(): boolean {
        return !!this.parent.querySelector('nr-fc-desc');
    }

    @HostBinding('attr.required')
    get required(): boolean {
        const element = this.parentForm.control.get(this.name) as any;

        if (element && element.validator) {
            const validator = element.validator({} as AbstractControl);

            if (validator && validator.required) {
                return true;
            }
        }

        return false;
    }

    constructor(
            private element: ElementRef<HTMLElement>,
            private parentForm: FormGroupDirective,
            private cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.parent = this.element.nativeElement.parentElement as HTMLElement;

        timer().subscribe(() => {
            this.name = this.parent.getAttribute('name') as string;
            const formElement = this.parent.querySelector(`[name="${this.name}"]`) as HTMLElement;
            this.controlId = formElement ? formElement.id : '';
            this.cd.markForCheck();
        });
    }
}
