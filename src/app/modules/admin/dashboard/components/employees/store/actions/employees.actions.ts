import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/core/auth/models/employee.model';

export const fetchEmployees = createAction('[Employee API] Fetch Employees');

export const fetchEmployeesSuccess = createAction(
  '[Employee API] Fetch Employees Success',
  props<{ readonly employees: Employee[] }>()
);

export const fetchEmployeesFailure = createAction(
  '[Employee API] Fetch Employees Failure',
  props<{ readonly error: any }>()
);

export const createEmployee = createAction(
  '[Employee API] Create Employee',
  props<{ readonly employee: Employee }>()
);

export const createEmployeeSuccess = createAction(
  '[Employee API] Create Employee Success',
  props<{ readonly employee: Employee }>()
);

export const createEmployeeFailure = createAction(
  '[Employee API] Create Employee Failure',
  props<{ readonly error: any }>()
);

export const updateEmployee = createAction(
  '[Employee API] Update Employee',
  props<{ readonly employee: Employee }>()
);

export const updateEmployeeSuccess = createAction(
  '[Employee API] Update Employee Success',
  props<{ readonly employee: Employee }>()
);

export const updateEmployeeFailure = createAction(
  '[Employee API] Update Employee Failure',
  props<{ readonly error: any }>()
);

export const deleteEmployee = createAction(
  '[Employee API] Delete Employee',
  props<{ readonly id: number }>()
);

export const deleteEmployeeSuccess = createAction(
  '[Employee API] Delete Employee Success',
  props<{ readonly id: number }>()
);

export const deleteEmployeeFailure = createAction(
  '[Employee API] Delete Employee Failure',
  props<{ readonly error: any }>()
);

export const purge = createAction('[Employees Page] Purge');
