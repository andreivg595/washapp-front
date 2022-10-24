import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signUp } from '../../store/actions/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.container.html',
  styleUrls: ['./sign-up.container.scss'],
})
export class SignUpContainer implements OnInit {
  form!: FormGroup;
  message = '';

  constructor(private fb: FormBuilder, private readonly store: Store<any>) {}

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
    this.store.dispatch(signUp({ user: form.value }));
  }
}
