import {Injectable} from '@angular/core';

import {CoreModule} from '../../core.module';

import {UiLayoutStore} from './ui-layout.store';
import {SidebarState} from './sidebar-state.enum';


@Injectable({providedIn: CoreModule})
export class UiLayoutService {

    constructor(private uiLayoutStore: UiLayoutStore) {}

    toggleSidebar() {
        this.uiLayoutStore.update(state => ({
            ...state,
            sidebarState: state.sidebarState === SidebarState.Expanded ? SidebarState.Compacted : SidebarState.Expanded
        }));
    }
}
