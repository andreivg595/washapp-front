import { createReducer, on } from '@ngrx/store';
import { Employee } from 'src/app/core/auth/models/employee.model';
import {
  createEmployeeSuccess,
  deleteEmployeeSuccess,
  fetchEmployeesSuccess,
  purge,
  updateEmployeeSuccess,
} from '../actions/employees.actions';

export interface EmployeesState {
  employees: Employee[] | any; //FIXME: error TS2322: Type 'Employee[] | null' is not assignable to type 'Employee[]'.
}

const initialState: EmployeesState = {
  employees: [],
};

export const employeesReducer = createReducer(
  initialState,
  on(fetchEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees,
  })),
  on(createEmployeeSuccess, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee],
  })),
  on(updateEmployeeSuccess, (state, { employee }) => ({
    ...state,
    employees: [
      ...state.employees.map((e: { id: number | undefined }) =>
        e?.id === employee.id ? employee : e
      ),
    ],
  })),
  on(deleteEmployeeSuccess, (state, { id }) => ({
    ...state,
    employees: [
      ...state.employees.filter(
        (e: { id: number | undefined }) => e?.id !== id
      ),
    ],
  })),
  on(purge, () => initialState)
);
