import {
    Component,
    EventEmitter,
    Output,
    Input,
    ContentChild,
    TemplateRef,
    ChangeDetectionStrategy,
    DoCheck
} from '@angular/core';

import {SelectItem} from './select-item/select-item.model';
import {ID} from '../../core/types';

@Component({
    selector: 'nr-select-template',
    templateUrl: './select.component.html',
    styleUrls: ['../form-control/form-style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements DoCheck {
    @ContentChild(TemplateRef, {static: false}) template: TemplateRef<SelectItem>;

    idSelectedItems: ID | ID[];
    idList: ID[] = [];

    @Input() items: SelectItem[];
    @Input() selectedItem: SelectItem[] | SelectItem = [{id: null}];
    @Input() multiple = false;
    @Input() placeholder: string;

    @Output() change = new EventEmitter<SelectItem>();

    constructor() {}

    ngDoCheck() {
        if (!this.multiple && !Array.isArray(this.selectedItem)) {
            this.idSelectedItems = this.selectedItem.id;
        } else {
            this.selectedItem.forEach(value => this.idList.push(value));
            this.idSelectedItems = this.idList;
        }
    }
}
