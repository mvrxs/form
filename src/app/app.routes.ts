import { Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ProductsComponent } from './products/products.component';
import { FormproductsComponent } from './formproducts/formproducts.component';

export const routes: Routes = [
    { path: 'items', component: ItemsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'formproducts', component: FormproductsComponent },
];
