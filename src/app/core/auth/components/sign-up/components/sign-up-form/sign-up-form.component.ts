import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ButtonColor,
  ButtonType,
} from 'src/app/shared/components/ui/button/button.component';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  @Input() form!: FormGroup;
  @Output() readonly formEvent = new EventEmitter<FormGroup>();

  readonly ButtonType = ButtonType;
  readonly ButtonColor = ButtonColor;

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
