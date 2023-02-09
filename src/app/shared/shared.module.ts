import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrimengModule } from './primeng.module';

import * as formComponents from './components';

@NgModule({
  declarations: [...formComponents.sharedComponents],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, PrimengModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengModule,
    ...formComponents.sharedComponents,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
