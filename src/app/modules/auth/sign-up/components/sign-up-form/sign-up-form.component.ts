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
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
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
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUp(): void {
    console.log(this.form.value);
  }

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get surnameControl(): FormControl {
    return this.form.get('surname') as FormControl;
  }

  get usernameControl(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
