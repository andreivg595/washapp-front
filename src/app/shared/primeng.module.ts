import { NgModule } from '@angular/core';

// primeng imports
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';

const primeNgModules = [
  MenubarModule,
  ButtonModule,
  ToolbarModule,
  InputTextModule,
  TableModule,
  ImageModule,
];

@NgModule({
  declarations: [],
  imports: [...primeNgModules],
  exports: [...primeNgModules],
})
export class PrimengModule {}
