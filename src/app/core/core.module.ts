import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { NavbarModule } from './navbar/navbar.module';
import { NgrxStoreModule } from './store/store.module';

@NgModule({
  imports: [NavbarModule, AuthModule, NgrxStoreModule],
  exports: [NavbarModule, NgrxStoreModule],
})
export class CoreModule {}
