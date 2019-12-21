import {Directive} from '@angular/core';

import {CanToggle, CanToggleCtor, mixinToggle} from '../core/behaviors/toggleable';


class ToggleBase {}

const _ToggleMixinBase: CanToggleCtor & typeof ToggleBase = mixinToggle(ToggleBase);

@Directive({
    selector: '[wmToggle]',
    inputs: ['pressed:wmToggle'],
    host: {
        '[attr.aria-pressed]': 'pressed',
        '[attr.pressed]': 'pressed'
    }
})
export class ToggleDirective extends _ToggleMixinBase implements CanToggle {}
