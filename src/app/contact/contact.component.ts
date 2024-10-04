import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
