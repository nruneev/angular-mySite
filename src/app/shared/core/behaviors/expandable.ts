import {coerceBooleanProperty} from '@angular/cdk/coercion';

import {Constructor} from './constructor';


export interface CanExpand {
    expanded: boolean;
}

export type CanExpandCtor = Constructor<CanExpand>;

export function mixinExpand<T extends Constructor<{}>>(base: T): CanExpandCtor & T {
    return class extends base {
        private _expanded = false;

        get expanded() { return this._expanded; }

        set expanded(value: any) { this._expanded = coerceBooleanProperty(value); }

        constructor(...args: any[]) { super(...args); }
    };
}
