import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { Product } from 'src/app/core/auth/models/product.model';
import { fetchProducts } from 'src/app/core/store/actions/products.actions';
import {
  getProducts,
  getTopProducts,
  getBottomProducts,
  getAccessoriesProducts,
  getPacksProducts,
} from 'src/app/core/store/selectors/produts.selectors';

export enum ProductType {
  Top = 1,
  Bottom,
  Accessories,
  Packs,
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.container.html',
  styleUrls: ['./shop.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopContainer implements OnInit {
  readonly products$ = this.store.pipe(
    select(getProducts),
    filter((p) => !!p)
  );
  readonly topProducts$ = this.store.pipe(select(getTopProducts));
  readonly bottomProducts$ = this.store.pipe(select(getBottomProducts));
  readonly accessoriesProducts$ = this.store.pipe(
    select(getAccessoriesProducts)
  );
  readonly packsProducts$ = this.store.pipe(select(getPacksProducts));

  constructor(private readonly store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchProducts());
  }

  addProduct(product: { product: Product; quantity: number }): void {
    console.log(product);
  }
}
