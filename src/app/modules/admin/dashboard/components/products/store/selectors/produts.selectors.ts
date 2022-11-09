import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '../reducers/products.reducers';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const getProducts = createSelector(
  selectProductsState,
  (state) => state.products
);
