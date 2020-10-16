import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book.routing';
import { BookComponent } from './book.component';

import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

@NgModule({
  declarations: [BookComponent, BookListComponent,
    BookDetailComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
