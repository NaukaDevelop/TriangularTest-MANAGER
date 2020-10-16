import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { map, tap, catchError, retry } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { EnvService } from 'src/shared/environment/env.service';

import { Book } from './model/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient,
    private env: EnvService,
    private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private books = [
    { id: 1, name: 'Abecitos' },
    { id: 2, name: 'Caratula' },
    { id: 3, name: 'Faja' },
    { id: 4, name: 'Honor amor' },
    { id: 5, name: 'Fine Art' },
  ];

  // addBook(book: Book): Observable<Book> {
  //   console.log('book', book);
  //   this.books = JSON.parse(JSON.stringify(this.books));
  //   console.log('books', this.books);
  //   this.books.push(book);

  //  this.books.push(book);
  //   return of(book);
  // }

  addBook(book: Book): Observable<Book> {
    this.books = JSON.parse(JSON.stringify(this.books));
    this.books.push(book);
    return of(book);
  }

  listBook(): Observable<Book[]> {
    const url = `${this.env.testUrl}/books`;
    return this.http
      .get<Book[]>(url)
      .pipe(map((data) => data));
  }

  updateBook(book: Book): Observable<Book[]> {
    const { id } = book;
    this.books = this.books.filter((item) => item.id !== id);
    this.books.push(book);
    console.log(this.books);
    return of(this.books);
  }

  deleteBook(id: number): Observable<Book[]> {
    this.books = this.books.filter((item) => item.id !== id);
    return of(this.books);
  }
}
