import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/auth/models/product.model';
import { ButtonColor } from 'src/app/shared/components/ui/button/button.component';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss'],
})
export class ShopCardComponent {
  @Input() product: Product;
  @Output() readonly addProduct = new EventEmitter<{
    product: Product;
    quantity: number;
  }>();

  readonly ButtonColor = ButtonColor;
  quantity = 1;

  add(product: Product): void {
    this.addProduct.emit({ product, quantity: this.quantity });
    this.quantity = 1;
  }
}
