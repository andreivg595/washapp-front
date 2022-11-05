import { createReducer, on } from '@ngrx/store';
import { Employee } from 'src/app/core/auth/models/employee.model';
import {
  createEmployeeSuccess,
  deleteEmployeeSuccess,
  fetchEmployeesSuccess,
  purge,
  updateEmployeeSuccess,
} from '../actions/dashboard.actions';

export interface DashboardState {
  employees: Employee[] | any; //FIXME: Error: src/app/modules/admin/dashboard/dashboard.container.html:4:28 - error TS2322: Type 'Employee[] | null' is not assignable to type 'Employee[]'.
}

const initialState: DashboardState = {
  employees: [],
};

export const dashboardReducer = createReducer(
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
