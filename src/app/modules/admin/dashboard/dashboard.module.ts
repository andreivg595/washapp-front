import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainer } from './dashboard.container';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dashboardReducer } from './store/reducers/dashboard.reducers';
import { DashboardEffects } from './store/effects/dashboard.effects';
import { EmployeesFormComponent } from './components/employees/employees-form/employees-form.component';

@NgModule({
  declarations: [
    DashboardContainer,
    EmployeesListComponent,
    EmployeesFormComponent,
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  exports: [DashboardContainer],
})
export class DashboardModule {}
