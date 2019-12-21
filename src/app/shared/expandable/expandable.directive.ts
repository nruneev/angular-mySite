import {Directive} from '@angular/core';

import {CanExpand, CanExpandCtor, mixinExpand} from '../core/behaviors/expandable';

class ExpandableBase {}

const _ExpandableMixinBase: CanExpandCtor & typeof ExpandableBase = mixinExpand(ExpandableBase);

@Directive({
    selector: '[nrExpandable]',
    inputs: ['expanded:nrExpanded'],
    host: {
        '[attr.aria-expanded]': 'expanded',
        '[attr.expanded]': 'expanded',
    },
})
export class ExpandableDirective extends _ExpandableMixinBase implements CanExpand {}
