import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainer } from './login.container';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [LoginContainer, LoginFormComponent],
  imports: [LoginRoutingModule, SharedModule],
  exports: [LoginContainer],
})
export class LoginModule {}
