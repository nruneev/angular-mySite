import {
    Directive,
    Input,
    ElementRef,
    HostListener,
    ComponentFactoryResolver,
    ComponentRef,
    ViewContainerRef,
    OnDestroy
} from '@angular/core';

import {TooltipComponent} from './tooltip.component';


@Directive({
    selector: '[nrTooltip]'
})
export class TooltipDirective implements OnDestroy {
    private readonly customCssProperty = ['--wm-tooltip-text', '--wm-tooltip-bg'];

    @Input('wmTooltip') content: string;

    private componentRef: ComponentRef<TooltipComponent>;

    constructor(
            private element: ElementRef,
            private resolver: ComponentFactoryResolver,
            private viewContainerRef: ViewContainerRef
    ) {}

    @HostListener('mouseenter', [])
    onMouseOver() {
        this.createComponent();
    }

    @HostListener('mouseleave', [])
    onMouseOut() {
        this.destroyComponent();
    }

    ngOnDestroy() {
        this.destroyComponent();
    }

    private createComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(TooltipComponent);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);

        const tooltipElement = this.componentRef.location.nativeElement as HTMLElement;
        const currentElement = this.element.nativeElement as HTMLElement;

        this.cloneCustomCSSProperty(currentElement, tooltipElement, this.customCssProperty);

        document.body.appendChild(tooltipElement);

        this.componentRef.instance.content = this.content;
        this.componentRef.instance.attachedElement = this.element;
    }

    private cloneCustomCSSProperty(from: HTMLElement, to: HTMLElement, props: string[]) {
        props.forEach(item => to.style.setProperty(item, getComputedStyle(from).getPropertyValue(item)));
    }

    private destroyComponent() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
}
