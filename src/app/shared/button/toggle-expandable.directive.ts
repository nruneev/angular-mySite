import {Attribute, Directive} from '@angular/core';

import {CanToggle, CanToggleCtor, mixinToggle} from '../core/behaviors/toggleable';


class ToggleExpandableBase {}

const _ToggleExpandableMixinBase: CanToggleCtor & typeof ToggleExpandableBase = mixinToggle(ToggleExpandableBase);

@Directive({
    selector: '[wmToggleExpandable]',
    inputs: ['pressed:wmToggleExpandable'],
    host: {
        '[attr.aria-pressed]': 'pressed',
        '[attr.pressed]': 'pressed',
        '[attr.aria-expanded]': 'pressed'
    }
})
export class ToggleExpandableDirective extends _ToggleExpandableMixinBase implements CanToggle {
    constructor(@Attribute('aria-controls') ariaControls: string) {
        super();
        if (!ariaControls) {
            throw new Error('You must set "aria-controls" attribute for ToggleExpandableDirective');
        }
    }
}
