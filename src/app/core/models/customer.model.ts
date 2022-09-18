import { Person } from './person.model';

export interface Customer extends Person {
  phone?: string;
  city?: string;
  address?: string;
  cp?: string;
  cart?: string; //TODO: Cart
}
