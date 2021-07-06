import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ComicInstance } from './model/comic-instance.model';
import { Collector } from './model/collector.model';
import { MOCKCOLLECTORS } from './model/mock-collectors';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {

  constructor(httpClient: HttpClient) {}

  getCollectors(): Observable<Collector[]> {
    const collectors = of(MOCKCOLLECTORS);
    return collectors.pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(_err => this.handleError)
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
