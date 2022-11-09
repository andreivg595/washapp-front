import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsContainer } from './products.container';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer } from './store/reducers/products.reducers';
import { ProductsEffects } from './store/effects/products.effects';

@NgModule({
  declarations: [
    ProductsContainer,
    ProductsFormComponent,
    ProductsListComponent,
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [ProductsContainer],
})
export class ProductsModule {}
