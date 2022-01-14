import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, filter } from 'rxjs/operators';

import { Comic } from './model/comic.model';
import { MOCKCOMICS } from './model/mock-comics.model';
import { ComicValue } from './model/comic-value.model';
import { MOCK_COMIC_VALUES } from './model/mock-comic-value.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getComics(): Observable<Comic[]> {
    const comics = of(MOCKCOMICS);
    return comics.pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(err => this.handleError)
    );
  }

  getSearchedComics(searchQuery: string): Observable<Comic[]> {
    const comics = of(MOCKCOMICS.filter(comic => comic.title.toLowerCase().includes(searchQuery.toLowerCase()) || comic.series.toLowerCase().includes(searchQuery.toLowerCase())));
    return comics.pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(err => this.handleError)
    );
  }

  getComicValues(): Observable<ComicValue[]> {
    const comicValues = of(MOCK_COMIC_VALUES);
    return comicValues.pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(err => this.handleError)
    );
  }

  getComicValue(issueNumber: string, condition: string): Observable<ComicValue> {
    const comicValues = of(MOCK_COMIC_VALUES.find(
      comicValue => comicValue.condition.toLowerCase().includes(condition.toLowerCase())
        && comicValue.issueNumber.toLowerCase().includes(issueNumber.toLowerCase())));
    return comicValues.pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(err => this.handleError)
    );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
