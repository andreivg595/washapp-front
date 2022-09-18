import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/components/ui/toast/service/toast.service';
import { ToastType } from 'src/app/shared/components/ui/toast/toast.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss'],
})
export class LoginContainer implements OnInit {
  form!: FormGroup;
  employee = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  protected initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loginEmployee() {
    this.employee = true;
  }

  login(form: FormGroup): void {
    this.employee
      ? this.authService.authEmployee(form.value).subscribe({
          next: () => {
            //this.router.navigate(['/login']);
          },
          error: (error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.toastService.showToast(ToastType.ERROR, 'Wrong password');
            } else {
              this.toastService.showToast(ToastType.ERROR, error.error.message);
            }
          },
        })
      : this.authService.authCustomer(form.value).subscribe({
          next: () => {
            //this.router.navigate(['/login']);
          },
          error: (error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.toastService.showToast(ToastType.ERROR, 'Wrong password');
            } else {
              this.toastService.showToast(ToastType.ERROR, error.error.message);
            }
          },
        });
  }
}
