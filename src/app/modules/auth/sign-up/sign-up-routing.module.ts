import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpContainer } from './sign-up.container';

const routes: Routes = [{ path: '', component: SignUpContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
