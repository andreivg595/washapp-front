import { Component, Input } from '@angular/core';

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

export enum ButtonColor {
  PRIMARY = 'p-button-primary',
  SECONDARY = 'p-button-secondary',
  SUCCESS = 'p-button-success',
  INFO = 'p-button-info',
  WARNING = 'p-button-warning',
  HELP = 'p-button-help',
  DANGER = 'p-button-danger',
}

export enum ButtonIconPos {
  LEFT = 'left',
  RIGHT = 'right',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type = ButtonType.BUTTON;
  @Input() color = ButtonColor.PRIMARY;
  @Input() label = 'Button';
  @Input() icon = '';
  @Input() iconPos = ButtonIconPos.LEFT;
  @Input() disabled = false;
}
