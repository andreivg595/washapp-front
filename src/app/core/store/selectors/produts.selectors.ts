import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductType } from 'src/app/modules/public/shop/shop.container';
import { ProductsState } from '../reducers/products.reducers';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const getProducts = createSelector(
  selectProductsState,
  (state) => state.products
);

export const getTopProducts = createSelector(selectProductsState, (state) =>
  state.products.filter((p) => p.type === ProductType.Top)
);

export const getBottomProducts = createSelector(selectProductsState, (state) =>
  state.products.filter((p) => p.type === ProductType.Bottom)
);

export const getAccessoriesProducts = createSelector(
  selectProductsState,
  (state) => state.products.filter((p) => p.type === ProductType.Accessories)
);

export const getPacksProducts = createSelector(selectProductsState, (state) =>
  state.products.filter((p) => p.type === ProductType.Packs)
);
