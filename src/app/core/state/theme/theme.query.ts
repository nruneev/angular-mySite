import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';

import {ThemeStore, ThemeState} from './theme.store';
import {Theme} from './theme.enum';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class ThemeQuery extends Query<ThemeState> {

    currentTheme$: Observable<Theme> = this.select('theme');

    constructor(protected store: ThemeStore) {
        super(store);
    }

}
