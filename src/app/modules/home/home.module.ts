import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainer } from './home.container';

@NgModule({
  declarations: [HomeContainer],
  imports: [HomeRoutingModule],
  exports: [HomeContainer],
})
export class HomeModule {}
