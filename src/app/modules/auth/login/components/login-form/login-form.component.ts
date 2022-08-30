import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ButtonColor,
  ButtonType,
} from 'src/app/shared/components/ui/button/button.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;

  readonly ButtonType = ButtonType;
  readonly ButtonColor = ButtonColor;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  protected initForm(): void {
    //TODO: email validation
    this.form = this.fb?.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    console.log(this.form.value);
  }

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
