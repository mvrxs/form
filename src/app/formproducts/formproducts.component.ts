import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';


export interface Product {
  reference: string;
  name: string;
  price: number;
  description: string;
  category: string;
  sale: boolean;
  image: string;
}

@Component({
  selector: 'app-formproducts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formproducts.component.html',
})

export class FormproductsComponent {


  product: Product = {
    reference: '',
    name: '',
    price: 0,
    description: '',
    category: '',
    sale: false,
    image: '',
  };

  regexPatternRef = /^[A-Za-z]{3}\d{10}$/;

  form = new FormGroup({
    reference: new FormControl('', [Validators.required, Validators.pattern(this.regexPatternRef)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    price: new FormControl('',[Validators.required, Validators.min(0)]),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    sale: new FormControl(''),
    image: new FormControl(''),
  });

  f = this.form.controls;


  constructor(private router: Router, private productService: ProductService) { }
  
  onSubmit() {
    if (this.form.invalid) {
      console.log('Form data:', this.product);
      return;
    }

    this.productService.setProduct(this.product);
    this.router.navigate(['/products']);
  }

    //this.router.navigate(['/products'], { state: { productData: this.product } });
  }



