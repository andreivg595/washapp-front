import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      `${this.url}/products`,
      this.getProductFormData(product)
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.url}/products/${product?.id}`,
      this.getProductFormData(product)
    );
  }

  deleteProduct(id: number | undefined): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/products/${id}`);
  }

  private getProductFormData(product: Product): FormData {
    const formData = new FormData();
    console.log(product?.image?.length);
    console.log(product.image);
    formData.append(
      'body',
      new Blob(
        [
          JSON.stringify({
            name: product.name,
            price: product.price,
            type: product.type,
          }),
        ],
        {
          type: 'application/json',
        }
      )
    );

    if (!product.image?.length) formData.append('imageFile', product.image);

    /* product.image?.length
      ? formData.append(
          'imageFile',
          new File([product.image], `${product.name}-updated.png`, {
            type: 'image/png',
          })
        )
      : formData.append('imageFile', product.image); */

    console.log(formData);
    console.log(new File([product.image], `${product.name}-updated.png`));
    return formData;
  }

  /* private base64toBlob(base64Data: any, contentType: any): Blob {
    contentType = contentType || '';
    const sliceSize = 1024;
    const byteCharacters = Buffer.from(base64Data, 'base64').toString('latin1');
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  } */
}
