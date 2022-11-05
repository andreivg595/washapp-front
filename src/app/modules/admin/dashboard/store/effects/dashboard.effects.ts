import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  fetchEmployees,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  createEmployee,
  createEmployeeSuccess,
  createEmployeeFailure,
  updateEmployee,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  deleteEmployee,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
} from '../actions/dashboard.actions';
import { EmployeeService } from '../../service/employee.service';
import { AuthEffects } from 'src/app/core/auth/store/effects/auth.effects';
import { ToastService } from 'src/app/shared/components/ui/toast/service/toast.service';
import { ToastType } from 'src/app/shared/components/ui/toast/toast.component';

@Injectable()
export class DashboardEffects {
  constructor(
    private readonly actions$: Actions,
    private employeeService: EmployeeService,
    private authEffects: AuthEffects,
    private toastService: ToastService
  ) {}

  readonly fetchEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployees),
      switchMap(() =>
        this.employeeService.getEmployees().pipe(
          map((employees) => fetchEmployeesSuccess({ employees })),
          catchError((error) => {
            return of(fetchEmployeesFailure({ error }));
          })
        )
      )
    )
  );

  readonly createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEmployee),
      switchMap(({ employee }) =>
        this.employeeService.createEmployee(employee).pipe(
          map((employee) => createEmployeeSuccess({ employee })),
          catchError((error) => {
            this.authEffects.showError(error);
            return of(createEmployeeFailure({ error }));
          })
        )
      )
    )
  );

  readonly updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployee),
      switchMap(({ employee }) =>
        this.employeeService.updateEmployee(employee).pipe(
          map((employee) => updateEmployeeSuccess({ employee })),
          tap(() => this.toastService.showToast(ToastType.SUCCESS, '')),
          catchError((error) => {
            this.authEffects.showError(error);
            return of(updateEmployeeFailure({ error }));
          })
        )
      )
    )
  );

  readonly deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEmployee),
      switchMap(({ id }) =>
        this.employeeService.deleteEmployee(id).pipe(
          map(() => deleteEmployeeSuccess({ id })),
          catchError((error) => {
            this.authEffects.showError(error);
            return of(deleteEmployeeFailure({ error }));
          })
        )
      )
    )
  );
}
