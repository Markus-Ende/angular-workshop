
import {of as observableOf,  Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Book } from "./book";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BookDataService {
  constructor(private http: HttpClient) {}

  getBooksArray(): Observable<Book[]> {
    return observableOf([]);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:4730/books");
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>("http://localhost:4730/books", book);
  }

  updateBook(isbn: string, vector: any): Observable<Book> {
    return this.http.patch<Book>(`http://localhost:4730/books/${isbn}`, vector);
  }
}
