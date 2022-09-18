import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastType } from 'src/app/shared/components/ui/toast/toast.component';
import { ToastService } from 'src/app/shared/components/ui/toast/service/toast.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.container.html',
  styleUrls: ['./sign-up.container.scss'],
})
export class SignUpContainer implements OnInit {
  form!: FormGroup;
  message = '';

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
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signUp(form: FormGroup): void {
    this.authService.createCustomer(form.value).subscribe({
      next: () => {
        this.message = 'Registration successful';
        this.toastService.showToast(ToastType.SUCCESS, this.message);
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 500) {
          if (error.error.trace.includes('@')) {
            this.message = 'Email already exists';
            this.toastService.showToast(ToastType.ERROR, this.message);
          } else {
            this.message = 'Username already exists';
            this.toastService.showToast(ToastType.ERROR, this.message);
          }
        } else {
          this.toastService.showToast(ToastType.ERROR, error.message);
        }
      },
    });
  }
}
