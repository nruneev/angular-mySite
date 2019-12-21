import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input} from '@angular/core';

import {AgentMenuItems} from './agent-menu-item.model';
import {ID} from '../../shared/types';


@Component({
    selector: 'agent-widget',
    templateUrl: './agent-widget.component.html',
    styleUrls: ['./agent-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom
})
export class AgentWidgetComponent {
    @Input() set agentMenuItems(items: AgentMenuItems[]) {
        this.menuItems = [...items];
    }

    menuItems: AgentMenuItems[] | {id: ID}[] = [
      {id: 0, link: '', title: 'Справки'},
      {id: 2, link: '', title: 'Темный режим'},
    ];
}
