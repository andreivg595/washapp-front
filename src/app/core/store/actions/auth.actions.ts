import { createAction, props } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import { Employee } from '../../models/employee.model';

export const signUp = createAction(
  '[Auth Signup] Sign Up',
  props<{ readonly user: Customer }>()
);

export const signUpSuccess = createAction(
  '[Auth Signup API] Sign Up Success',
  props<{ readonly user: Customer }>()
);

export const signUpFailure = createAction(
  '[Auth Signup API] Sign Up Failure',
  props<{ readonly error: any }>()
);

export const logInCustomer = createAction(
  '[Auth Login Page] Log In Customer',
  props<{
    readonly user: Customer;
  }>()
);

export const logInCustomerSuccess = createAction(
  '[Auth Login API] Log In Customer Success',
  props<{ readonly user: Customer }>()
);

export const logInCustomerFailure = createAction(
  '[Auth Login API] Log In Customer Failure',
  props<{ readonly error: any }>()
);

export const logInEmployee = createAction(
  '[Auth Login Page] Log In Employee',
  props<{
    readonly user: Employee;
  }>()
);

export const logInEmployeeSuccess = createAction(
  '[Auth Login API] Log In Employee Success',
  props<{ readonly user: Employee }>()
);

export const logInEmployeeFailure = createAction(
  '[Auth Login API] Log In Employee Failure',
  props<{ readonly error: any }>()
);

export const logOut = createAction('[Logout] Log Out');
