import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Employee } from 'src/app/core/auth/models/employee.model';
import { ButtonColor } from 'src/app/shared/components/ui/button/button.component';
import {
  createEmployee,
  deleteEmployee,
  fetchEmployees,
  purge,
  updateEmployee,
} from './store/actions/employees.actions';
import { getEmployees } from './store/selectors/employees.selectors';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.container.html',
  styleUrls: ['./employees.container.scss'],
})
export class EmployeesContainer implements OnInit, OnDestroy {
  readonly employees$ = this.store.pipe(select(getEmployees));
  readonly ButtonColor = ButtonColor;

  form!: FormGroup;
  displayEmployee = false;
  isEdited = false;

  constructor(private readonly store: Store<any>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(fetchEmployees());
    this.initForm();
  }

  protected initForm(): void {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      //password: ['', [Validators.required, Validators.minLength(6)]],
      password: [''],
      nif: [''],
      ss: [''],
    });
  }

  add(): void {
    if (this.isEdited) this.form.reset();
    this.isEdited = false;
    this.openDialog();
  }

  openDialog(): void {
    this.displayEmployee = true;
  }

  onFormEmployees(form: FormGroup): void {
    if (!this.isEdited)
      this.store.dispatch(createEmployee({ employee: form.value }));
    else this.store.dispatch(updateEmployee({ employee: form.value }));
    this.displayEmployee = false;
  }

  onModify(employee: Employee): void {
    this.displayEmployee = true;
    this.isEdited = true;
    this.form.patchValue(employee);
  }

  onDelete(employee: Employee): void {
    this.store.dispatch(deleteEmployee({ id: employee.id }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(purge());
  }
}
