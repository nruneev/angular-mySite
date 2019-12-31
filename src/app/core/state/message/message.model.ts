import {ID} from '../../../shared/types';

export interface Message {
  id: ID;
  name: string;
  email: string;
  text: string;
}
