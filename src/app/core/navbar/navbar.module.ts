import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarContainer } from './navbar.container';

@NgModule({
  declarations: [NavbarContainer],
  imports: [SharedModule],
  exports: [NavbarContainer],
})
export class NavbarModule {}
