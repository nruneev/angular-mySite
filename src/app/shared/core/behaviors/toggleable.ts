import {coerceBooleanProperty} from '@angular/cdk/coercion';

import {Constructor} from './constructor';


export interface CanToggle {
    pressed: boolean;
}

export type CanToggleCtor = Constructor<CanToggle>;

export function mixinToggle<T extends Constructor<{}>>(base: T): CanToggleCtor & T {
    return class extends base {
        private _pressed = false;

        get pressed() { return this._pressed; }

        set pressed(value: any) { this._pressed = coerceBooleanProperty(value); }

        constructor(...args: any[]) { super(...args); }
    };
}
