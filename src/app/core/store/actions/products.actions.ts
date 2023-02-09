import { createAction, props } from '@ngrx/store';
import { Product } from '../../auth/models/product.model';

export const fetchProducts = createAction('[Product API] Fetch Products');

export const fetchProductsSuccess = createAction(
  '[Product API] Fetch Products Success',
  props<{ readonly products: Product[] }>()
);

export const fetchProductsFailure = createAction(
  '[Product API] Fetch Products Failure',
  props<{ readonly error: any }>()
);

export const createProduct = createAction(
  '[Product API] Create Product',
  props<{ readonly product: Product }>()
);

export const createProductSuccess = createAction(
  '[Product API] Create Product Success',
  props<{ readonly product: Product }>()
);

export const createProductFailure = createAction(
  '[Product API] Create Product Failure',
  props<{ readonly error: any }>()
);

export const updateProduct = createAction(
  '[Product API] Update Product',
  props<{ readonly product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Product API] Update Product Success',
  props<{ readonly product: Product }>()
);

export const updateProductFailure = createAction(
  '[Product API] Update Product Failure',
  props<{ readonly error: any }>()
);

export const deleteProduct = createAction(
  '[Product API] Delete Product',
  props<{ readonly id: number }>()
);

export const deleteProductSuccess = createAction(
  '[Product API] Delete Product Success',
  props<{ readonly id: number }>()
);

export const deleteProductFailure = createAction(
  '[Product API] Delete Product Failure',
  props<{ readonly error: any }>()
);

export const purge = createAction('[Products Page] Purge');
