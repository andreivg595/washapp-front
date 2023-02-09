import { NgModule } from '@angular/core';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopContainer } from './shop.container';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopCardComponent } from './components/shop-card/shop-card.component';

@NgModule({
  declarations: [ShopContainer, ShopCardComponent],
  imports: [ShopRoutingModule, SharedModule],
})
export class ShopModule {}
