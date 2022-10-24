import { createReducer, on } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import { Employee } from '../../models/employee.model';
import {
  logInCustomerSuccess,
  logInEmployeeSuccess,
  logOut,
} from '../actions/auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  isEmployee: boolean;
  user: Customer | Employee | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isEmployee: false,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(logInCustomerSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
  })),
  on(logInEmployeeSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    isEmployee: true,
    user,
  })),
  on(logOut, () => initialState)
);
