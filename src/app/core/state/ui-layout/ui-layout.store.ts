import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';

import {CoreModule} from '../../core.module';

import {SidebarState} from './sidebar-state.enum';


export interface UiLayoutState {
    sidebarState: SidebarState;
}

function createInitialState(): UiLayoutState {
    return {
        sidebarState: SidebarState.Compacted
    };
}

@Injectable({providedIn: CoreModule})
@StoreConfig({name: 'ui-layout'})
export class UiLayoutStore extends Store<UiLayoutState> {
    constructor() {
        super(createInitialState());
    }
}

