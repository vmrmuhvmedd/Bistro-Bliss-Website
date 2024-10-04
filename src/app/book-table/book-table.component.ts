import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent {
  // http = inject(HttpClient)

  formData : any;

  fetchData (e : any) {
    e.preventDefault()
    this.formData = new FormData(e.target)
    // console.log(this.formData.get("Name"))
    // this.http.post('link', this.formData)
    // .subscribe()
  }

}
