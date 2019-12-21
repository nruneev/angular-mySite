import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';

import {CoreModule} from '../../core.module';

import {CurrentAgentEnvStore, CurrentAgentEnv} from './current-agent-env.store';


@Injectable({providedIn: CoreModule})
export class CurrentAgentEnvQuery extends Query<CurrentAgentEnv> {
    constructor(protected store: CurrentAgentEnvStore) {
        super(store);
    }
}
