import { NgModule } from '@angular/core';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  imports: [NavbarModule],
  exports: [NavbarModule],
})
export class CoreModule {}
