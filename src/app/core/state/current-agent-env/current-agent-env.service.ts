import {Injectable} from '@angular/core';

import {CoreModule} from '../../core.module';

import {CurrentAgentEnvStore} from './current-agent-env.store';


@Injectable({providedIn: CoreModule})
export class CurrentAgentEnvService {

    constructor(private userStorageStore: CurrentAgentEnvStore) {
    }

    connect() {
      this.userStorageStore.update(state => ({
        ...state,
        sound: !!JSON.parse(localStorage.getItem('sound_turned_on') || '1')
      }));
      window.addEventListener('storage', this.storageEventListener.bind(this));
    }

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea === localStorage) {
      try {
        this.userStorageStore.update(state => ({
          ...state,
          sound: !!JSON.parse(localStorage.getItem('sound_turned_on') || '1')
        }));
      } catch (e) {
        console.log(e);
      }
    }
  }

    toggleSound() {
      localStorage.setItem('sound_turned_on', !JSON.parse(localStorage.getItem('sound_turned_on') || '1') ? '1' : '0');
      this.userStorageStore.update(state => ({
            ...state,
            sound: !!JSON.parse(localStorage.getItem('sound_turned_on') || '1')
        }));
    }
}
