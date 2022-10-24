import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainer } from './dashboard.container';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardContainer],
  imports: [DashboardRoutingModule, SharedModule],
  exports: [DashboardContainer],
})
export class DashboardModule {}
