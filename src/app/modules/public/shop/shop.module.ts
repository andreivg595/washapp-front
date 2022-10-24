import { NgModule } from '@angular/core';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopContainer } from './shop.container';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [ShopContainer],
  imports: [ShopRoutingModule, SharedModule],
})
export class ShopModule {}
