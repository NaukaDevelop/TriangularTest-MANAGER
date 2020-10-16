import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
//  Models
import { Book } from './model/book.model';
// State
import { DeleteBook, UpdateBook, ListBook, AddBook } from './state';
import { BookState } from './state';
// Services
// import { BooksService } from 'src/shared/services';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {


  @Select(BookState.getBookList) books$: Observable<Book[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    // debugger;
    this.store.dispatch(new ListBook());
  }

  onAddNew(): void {
    const newBook = {
      id: 20,
      name: 'Adios mundo!',
    };
    console.log('newBook', newBook);

    this.store.dispatch(new AddBook(newBook));
  }

  onUpdateBook(): void {
    const updateBook = {
      id: 3,
      name: 'Mundo Cruel!',
    };
    this.store.dispatch(new UpdateBook(updateBook));
  }

  onDeleteBook(): void {
    this.store.dispatch(new DeleteBook(3));
  }
}
