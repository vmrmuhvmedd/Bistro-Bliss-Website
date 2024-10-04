import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  http = inject(HttpClient)
  

  fetchData () {
    this.http.get('http://localhost:3002/products').subscribe((data) =>console.log(data),(er) => console.log(er))
  }

  // sendData() {
  //   this.http.post('http://localhost:3002/products',)
  // }

  ngOnInit(): void {
    this.fetchData()
  }
}
