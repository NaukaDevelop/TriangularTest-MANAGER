import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AddBook, ListBook, UpdateBook, DeleteBook } from './book.actions';
import { BookService } from '../books.service';
import { Book } from '../model';

export class BookStateModel {
  public book: Book[];
  public selectedBook: Book;
}

@State<BookStateModel>({
  name: 'book',
  defaults: {
    book: [],
    selectedBook: null,
  },
})
@Injectable()
export class BookState {
  constructor(private readonly bookService: BookService) { }

  @Selector()
  public static getBookList({ book }: BookStateModel): Book[] {
    return book;
  }

  @Selector()
  public static getSelectedBook({ selectedBook }): Book {
    return selectedBook;
  }

  @Action(AddBook)
  addBook(
    { getState, patchState }: StateContext<BookStateModel>,
    { payload }: AddBook
  ): Observable<Book> {
    return this.bookService.addBook(payload).pipe(
      tap((book: Book) => {
        const state = getState();
        patchState({
          book: [...state.book, book],
          // books: [...state.books],
        });
      })
    );
  }

  @Action(ListBook)
  getBook({
    getState,
    setState,
  }: StateContext<BookStateModel>): Observable<Book[]> {
    return this.bookService.listBook().pipe(
      tap((book: Book[]) => {
        const state = getState();
        setState({ ...state, book });
      })
    );
  }

  @Action(UpdateBook)
  updateBook(
    { getState, setState }: StateContext<BookStateModel>,
    { payload }: UpdateBook
  ): Observable<Book[]> {
    return this.bookService.updateBook(payload).pipe(
      tap((book: Book[]) => {
        const state = getState();
        setState({ ...state, book });
      })
    );
  }

  @Action(DeleteBook)
  deleteBook(
    { getState, patchState }: StateContext<BookStateModel>,
    { id }: DeleteBook
  ): Observable<Book[]> {
    return this.bookService.deleteBook(id).pipe(
      tap((book: Book[]) => {
        const state = getState();
        patchState({ ...state.book, book });
      })
    );
  }
}
