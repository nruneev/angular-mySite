import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {Observable} from 'rxjs';

import {CoreModule} from '../../core.module';

import {UiLayoutStore, UiLayoutState} from './ui-layout.store';
import {SidebarState} from './sidebar-state.enum';


@Injectable({providedIn: CoreModule})
export class UiLayoutQuery extends Query<UiLayoutState> {

    sidebarState$: Observable<SidebarState> = this.select('sidebarState');

    constructor(protected store: UiLayoutStore) {
        super(store);
    }
}
