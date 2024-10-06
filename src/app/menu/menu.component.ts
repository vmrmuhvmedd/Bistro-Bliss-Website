import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  http = inject(HttpClient);
  productsArray: any[] = [];
  filteredProducts: any[] = [];
  displayedProducts: any[] = [];
  selectedCategory: string = 'All';
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalItems: number = 0;

  fetchData() {
    this.http.get('http://localhost:3002/products')
      .subscribe((response: any) => {
        this.productsArray = response;
        this.totalItems = this.productsArray.length;
        this.filterProducts();
      });
  }

  ngOnInit(): void {
      this.fetchData()
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.filterProducts();
  }

  filterProducts() {
    if (this.selectedCategory === 'All') {
      this.filteredProducts = this.productsArray;
    } else {
      this.filteredProducts = this.productsArray.filter(product => product.category === this.selectedCategory);
    }
    this.totalItems = this.filteredProducts.length;
    this.updatePageProducts();
  }

  updatePageProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedProducts = this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.updatePageProducts();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageProducts();
    }
  }
}
