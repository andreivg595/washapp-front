import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ToastService } from 'src/app/shared/components/ui/toast/service/toast.service';
import { ToastType } from 'src/app/shared/components/ui/toast/toast.component';
import { ProductsService } from '../../service/products.service';
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,
  createProduct,
  createProductSuccess,
  createProductFailure,
  updateProduct,
  updateProductSuccess,
  updateProductFailure,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFailure,
} from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private productsService: ProductsService,
    private toastService: ToastService,
    private readonly store: Store<any>
  ) {}

  readonly fetchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProducts),
      switchMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => fetchProductsSuccess({ products })),
          catchError((error) => {
            return of(fetchProductsFailure({ error }));
          })
        )
      )
    )
  );

  readonly createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProduct),
      switchMap(({ product }) =>
        this.productsService.createProduct(product).pipe(
          map((product) => createProductSuccess({ product })),
          tap(() => this.store.dispatch(fetchProducts())), // Needed for retrieve decompressBytes or img state crash
          catchError((error) => {
            this.toastService.showToast(ToastType.ERROR, error.error.message);
            return of(createProductFailure({ error }));
          })
        )
      )
    )
  );

  readonly updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      switchMap(({ product }) =>
        this.productsService.updateProduct(product).pipe(
          map((product) => updateProductSuccess({ product })),
          tap(() => this.toastService.showToast(ToastType.SUCCESS, '')),
          tap(() => this.store.dispatch(fetchProducts())), // Needed for retrieve decompressBytes or img state crash
          catchError((error) => {
            this.toastService.showToast(ToastType.ERROR, error.error.message);
            return of(updateProductFailure({ error }));
          })
        )
      )
    )
  );

  readonly deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      switchMap(({ id }) =>
        this.productsService.deleteProduct(id).pipe(
          map(() => deleteProductSuccess({ id })),
          catchError((error) => {
            return of(deleteProductFailure({ error }));
          })
        )
      )
    )
  );
}
