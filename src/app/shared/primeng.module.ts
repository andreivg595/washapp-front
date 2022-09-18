import { NgModule } from '@angular/core';

// primeng imports
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';

const primeNgModules = [
  MenubarModule,
  ButtonModule,
  InputTextModule,
  CardModule,
  ToastModule,
];

@NgModule({
  declarations: [],
  imports: [...primeNgModules],
  exports: [...primeNgModules],
})
export class PrimengModule {}
