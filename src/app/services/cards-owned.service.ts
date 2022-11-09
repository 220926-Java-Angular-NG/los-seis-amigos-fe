import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsOwnedService {

  private cardsOwnedUrl = 'http://localhost:8080/collection'
  private setsUrl = 'http://localhost:8080/sets'
  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
