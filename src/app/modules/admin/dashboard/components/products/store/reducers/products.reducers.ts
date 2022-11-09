import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import {
  createProductSuccess,
  deleteProductSuccess,
  fetchProductsSuccess,
  purge,
  updateProductSuccess,
} from '../actions/products.actions';

export interface ProductsState {
  products: Product[] | any; //FIXME: error TS2322: Type 'Product[] | null' is not assignable to type 'Product[]'.
}

const initialState: ProductsState = {
  products: [],
};

export const productsReducer = createReducer(
  initialState,
  on(fetchProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
  on(createProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(updateProductSuccess, (state, { product }) => ({
    ...state,
    products: [
      ...state.products.map((p: { id: number | undefined }) =>
        p?.id === product.id ? product : p
      ),
    ],
  })),
  on(deleteProductSuccess, (state, { id }) => ({
    ...state,
    products: [
      ...state.products.filter((p: { id: number | undefined }) => p?.id !== id),
    ],
  })),
  on(purge, () => initialState)
);
