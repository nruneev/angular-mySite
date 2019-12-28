import {ID} from '../../../shared/types';


export interface Feedback {
  id: ID;
  name: string;
  email?: string;
  feedback: string;
}
