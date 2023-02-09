import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../../../../core/auth/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: Product[] = [];
  @Output() readonly modifyEvent = new EventEmitter<Product>();
  @Output() readonly deleteEvent = new EventEmitter<Product>();
}
