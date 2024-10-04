import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'] // تأكد من استخدام styleUrls بدلاً من styleUrl
})
export class MenuComponent implements OnInit {
  http = inject(HttpClient);
  productsArray: any[] = [];
  filteredProducts: any[] = [];
  displayedProducts: any[] = []; // المتغير الجديد
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
    this.fetchData();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1; // إعادة ضبط الصفحة عند تغيير الفئة
    this.filterProducts();
  }

  filterProducts() {
    if (this.selectedCategory === 'All') {
      this.filteredProducts = this.productsArray;
    } else {
      this.filteredProducts = this.productsArray.filter(product => product.category === this.selectedCategory);
    }
    this.totalItems = this.filteredProducts.length; // تحديث العدد الإجمالي بعد التصفية
    this.updatePageProducts(); // تحديث المنتجات المعروضة حسب الصفحة
  }

  updatePageProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedProducts = this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage); // تحديث المنتجات المعروضة
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













// export class MenuComponent implements OnInit {

//   http = inject(HttpClient);
//   productsArray: any[] = [];
//   filteredProducts: any[] = [];
//   categories: string[] = ['All', 'Breakfast', 'Main Dishes', 'Drinks', 'Desserts'];  // الـ categories المتاحة
//   selectedCategory: string = 'All';  // الـ category الافتراضية هي All

//   fetchData() {
//     this.http.get('http://localhost:3002/products')
//       .subscribe((response: any) => {
//         this.productsArray = response;
//         this.filterProducts();  // فلترة المنتجات بعد جلبها
//       });
//   }

//   ngOnInit(): void {
//     this.fetchData();  // جلب البيانات عند تحميل الصفحة
//   }

//   selectCategory(category: string) {
//     this.selectedCategory = category;
//     this.filterProducts();  // تحديث المنتجات المعروضة بناءً على الـ category المختارة
//   }

//   filterProducts() {
//     if (this.selectedCategory === 'All') {
//       this.filteredProducts = this.productsArray;  // عرض كل المنتجات لو اختير All
//     } else {
//       this.filteredProducts = this.productsArray.filter(product => product.category === this.selectedCategory);
//     }
//   }
// }

