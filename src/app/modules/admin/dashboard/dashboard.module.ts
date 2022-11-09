import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainer } from './dashboard.container';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesModule } from './components/employees/employees.module';
import { ProductsModule } from './components/products/products.module';

@NgModule({
  declarations: [DashboardContainer],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    EmployeesModule,
    ProductsModule,
  ],
  exports: [DashboardContainer],
})
export class DashboardModule {}
