import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Card } from 'src/app/components/profile/userInterface';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cardUrl = 'http://localhost:8080/cards'
  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCardById(cardId: number): Observable<Card> {
    return this.http.get<Card>(this.cardUrl+`/${cardId}`)
      .pipe(
        tap(_ => console.log('fetched Card with Id: ', cardId)),
        catchError(this.handleError<Card>(`getCardById id=${cardId}`))
      );
  }

  getCardsBySet(setName:string): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardUrl+`/sets/${setName}`)
      .pipe(
        tap(_ => console.log('fetched Cards with SetName: ', setName)),
        catchError(this.handleError<Card[]>(`getCardsBySet setName=${setName}`))
      );
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
