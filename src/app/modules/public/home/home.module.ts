import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainer } from './home.container';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeContainer],
  imports: [HomeRoutingModule, SharedModule],
  exports: [HomeContainer],
})
export class HomeModule {}
