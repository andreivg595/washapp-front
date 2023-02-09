import { NgModule } from '@angular/core';

// primeng imports
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

const primeNgModules = [
  MenubarModule,
  ButtonModule,
  InputTextModule,
  CardModule,
  ToastModule,
  TabViewModule,
  TableModule,
  ToolbarModule,
  DialogModule,
  FileUploadModule,
  DropdownModule,
  InputNumberModule,
];

@NgModule({
  declarations: [],
  imports: [...primeNgModules],
  exports: [...primeNgModules],
})
export class PrimengModule {}
