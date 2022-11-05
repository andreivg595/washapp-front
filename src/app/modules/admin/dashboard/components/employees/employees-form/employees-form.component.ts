import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  ButtonColor,
  ButtonType,
} from 'src/app/shared/components/ui/button/button.component';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss'],
})
export class EmployeesFormComponent {
  @Input() form!: FormGroup;
  @Input() edited = false;
  @Output() readonly formEvent = new EventEmitter<FormGroup>();

  readonly ButtonColor = ButtonColor;
  readonly ButtonType = ButtonType;
}
