import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  purge,
  updateProduct,
} from 'src/app/core/store/actions/products.actions';
import { getProducts } from 'src/app/core/store/selectors/produts.selectors';
import { ButtonColor } from 'src/app/shared/components/ui/button/button.component';
import { Product } from '../../../../../core/auth/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss'],
})
export class ProductsContainer implements OnInit, OnDestroy {
  readonly products$ = this.store.pipe(select(getProducts));
  readonly ButtonColor = ButtonColor;

  form!: FormGroup;
  displayProduct = false;
  isEdited = false;

  constructor(private readonly store: Store<any>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(fetchProducts());
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  add(): void {
    if (this.isEdited) this.form.reset();
    this.isEdited = false;
    this.openDialog();
  }

  openDialog(): void {
    this.displayProduct = true;
  }

  onFormProducts(form: FormGroup): void {
    if (!this.isEdited)
      this.store.dispatch(createProduct({ product: form.value }));
    else this.store.dispatch(updateProduct({ product: form.value }));
    this.displayProduct = false;
  }

  onModify(product: Product): void {
    this.displayProduct = true;
    this.isEdited = true;
    this.form.patchValue(product);
  }

  onDelete(product: Product): void {
    this.store.dispatch(deleteProduct({ id: product.id }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(purge());
  }
}
