import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesContainer } from './employees.container';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeesReducer } from './store/reducers/employees.reducers';
import { EmployeesEffects } from './store/effects/employees.effects';

@NgModule({
  declarations: [
    EmployeesContainer,
    EmployeesListComponent,
    EmployeesFormComponent,
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature('employees', employeesReducer),
    EffectsModule.forFeature([EmployeesEffects]),
  ],
  exports: [EmployeesContainer],
})
export class EmployeesModule {}
