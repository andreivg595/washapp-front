import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  logInCustomer,
  logInEmployee,
} from 'src/app/core/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss'],
})
export class LoginContainer implements OnInit {
  form!: FormGroup;
  employee = false;

  constructor(private fb: FormBuilder, private readonly store: Store<any>) {}

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
      ? this.store.dispatch(logInEmployee({ user: form.value }))
      : this.store.dispatch(logInCustomer({ user: form.value }));
  }
}
