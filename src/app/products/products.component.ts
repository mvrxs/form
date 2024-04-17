import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../formproducts/formproducts.component';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  showSearchBar: boolean = false;

  constructor(private productService: ProductService) { } 

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.showSearchBar = this.products.length > 0;
  }

}
