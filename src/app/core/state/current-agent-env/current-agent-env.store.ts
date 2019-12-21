import {Injectable} from '@angular/core';
import {StoreConfig, Store} from '@datorama/akita';

import {CoreModule} from '../../core.module';


export interface CurrentAgentEnv {
    sound: boolean;
}

function createInitialState(): CurrentAgentEnv {
    return {
        sound: true
    };
}

@Injectable({providedIn: CoreModule})
@StoreConfig({name: 'current-agent-env'})
export class CurrentAgentEnvStore extends Store<CurrentAgentEnv> {
    constructor() {
        super(createInitialState());
    }
}
