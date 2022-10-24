import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  imports: [NavbarModule, AuthModule],
  exports: [NavbarModule],
})
export class CoreModule {}
