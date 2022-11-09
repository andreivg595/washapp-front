import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ButtonColor,
  ButtonType,
} from 'src/app/shared/components/ui/button/button.component';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent {
  @Input() form!: FormGroup;
  @Output() readonly formEvent = new EventEmitter<FormGroup>();

  readonly ButtonColor = ButtonColor;
  readonly ButtonType = ButtonType;

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.imageControl.setValue(file);
  }

  get imageControl(): FormControl {
    return this.form.get('image') as FormControl;
  }
}
