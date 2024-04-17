import { Injectable } from '@angular/core';
import { Product } from './formproducts/formproducts.component';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Product[] = [];

  constructor() {}

  setProduct(product: Product) {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductByReference(reference: string): Product | null {
    return this.products.find(product => product.reference === reference) || null;
  }
}
