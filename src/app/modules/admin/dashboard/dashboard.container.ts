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
} from './store/actions/dashboard.actions';
import { getEmployees } from './store/selectors/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss'],
})
export class DashboardContainer implements OnInit, OnDestroy {
  readonly employees$ = this.store.pipe(select(getEmployees));
  readonly ButtonColor = ButtonColor;

  formEmployees!: FormGroup;
  displayEmployee = false;
  isEdited = false;

  constructor(private readonly store: Store<any>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(fetchEmployees());
    this.initForm();
  }

  protected initForm(): void {
    this.formEmployees = this.fb.group({
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

  addEmployee(): void {
    if (this.isEdited) this.formEmployees.reset();
    this.isEdited = false;
    this.openEmployeeDialog();
  }

  openEmployeeDialog(): void {
    this.displayEmployee = true;
  }

  onFormEmployees(form: FormGroup): void {
    if (!this.isEdited)
      this.store.dispatch(createEmployee({ employee: form.value }));
    else this.store.dispatch(updateEmployee({ employee: form.value }));
    this.displayEmployee = false;
  }

  onModifyEmployee(employee: Employee): void {
    this.displayEmployee = true;
    this.isEdited = true;
    this.formEmployees.patchValue(employee);
  }

  onDeleteEmployee(employee: Employee): void {
    this.store.dispatch(deleteEmployee({ id: employee.id }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(purge());
  }
}
