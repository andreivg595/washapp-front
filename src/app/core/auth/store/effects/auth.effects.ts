import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  signUp,
  signUpSuccess,
  signUpFailure,
  logInCustomer,
  logInCustomerSuccess,
  logInCustomerFailure,
  logInEmployee,
  logInEmployeeSuccess,
  logInEmployeeFailure,
} from '../actions/auth.actions';
import { ToastService } from 'src/app/shared/components/ui/toast/service/toast.service';
import { ToastType } from 'src/app/shared/components/ui/toast/toast.component';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  readonly signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUp),
      switchMap(({ user }) =>
        this.authService.createCustomer(user).pipe(
          //map((user) => signUpSuccess({ user })),
          map((user) => {
            this.showSuccess();
            return signUpSuccess({ user });
          }),
          catchError((error) => {
            this.showError(error);
            return of(signUpFailure({ error }));
          })
        )
      )
    )
  );

  readonly logInCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logInCustomer),
      switchMap(({ user }) =>
        this.authService.authCustomer(user).pipe(
          map((user) => logInCustomerSuccess({ user })),
          tap(() => this.router.navigate(['/shop'])),
          catchError((error) => {
            this.showError(error);
            return of(logInCustomerFailure({ error }));
          })
        )
      )
    )
  );

  readonly logInEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logInEmployee),
      switchMap(({ user }) =>
        this.authService.authEmployee(user).pipe(
          map((user) => logInEmployeeSuccess({ user })),
          tap(() => this.router.navigate(['/dashboard'])),
          catchError((error) => {
            this.showError(error);
            return of(logInEmployeeFailure({ error }));
          })
        )
      )
    )
  );

  showError(error: HttpErrorResponse): void {
    let message = '';

    if (error.status === 401) {
      message = 'Wrong password';
      this.toastService.showToast(ToastType.ERROR, message);
    } else if (error.status === 500) {
      if (error.error.trace.includes('@')) {
        message = 'Email already exists';
        this.toastService.showToast(ToastType.ERROR, message);
      } else {
        message = 'Username already exists';
        this.toastService.showToast(ToastType.ERROR, message);
      }
    } else {
      this.toastService.showToast(
        ToastType.ERROR,
        error?.error?.message ?? error.message
      );
    }
  }

  private showSuccess(): void {
    const message = 'Registration successful';
    this.toastService.showToast(ToastType.SUCCESS, message);
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}
