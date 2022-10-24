import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpContainer } from './sign-up.container';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [SignUpContainer, SignUpFormComponent],
  imports: [SignUpRoutingModule, SharedModule],
  exports: [SignUpContainer],
})
export class SignUpModule {}
