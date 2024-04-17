import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private router: Router) { }

  goToItems() {
    this.router.navigate(['/items']);
  }
  goToProducts() {
    this.router.navigate(['/products']);
  }
  
  goToAdmin() {
    this.router.navigate(['/formproducts']);
  }
}
