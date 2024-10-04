import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BookTableComponent } from './book-table/book-table.component';
import { NotFoundError } from 'rxjs';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent,
  },
  {
    path : '',
    component : HomeComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : 'menu',
    component : MenuComponent
  },
  {
    path : 'book-a-table',
    component : BookTableComponent
  }
  // {
  //   path : '**',
  //   component : NotFoundError
  // }
];
