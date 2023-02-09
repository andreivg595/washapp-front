import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsContainer } from './products.container';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsContainer,
    ProductsFormComponent,
    ProductsListComponent,
  ],
  imports: [SharedModule],
  exports: [ProductsContainer],
})
export class ProductsModule {}
