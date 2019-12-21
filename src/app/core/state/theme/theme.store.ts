import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';

import {Theme} from './theme.enum';

export interface ThemeState {
    theme: Theme;
}

export function createInitialState(): ThemeState {
    return {
        theme: Theme.Default
    };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'theme'})
export class ThemeStore extends Store<ThemeState> {

    constructor() {
        super(createInitialState());
    }

}

