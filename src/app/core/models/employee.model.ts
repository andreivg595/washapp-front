import { Person } from './person.model';

export interface Employee extends Person {
  nif?: string;
  ss?: string;
}
