import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../components/cart-item/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CardsOwnedService {

  private cardsOwnedUrl = 'http://localhost:8080/collection'
  private setsUrl = 'http://localhost:8080/sets'
  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // TODO: make cardOwned interface
  // TODO: implement the cardOwned interface here
  // will return a list of cards (dont really need them)
  // TODO: implement getUsersCards()
  // public openSet(cartItem:CartItem) {
  //   return this.http.post<>(this.cardUrl+`/${cardId}`)
  //     .pipe(
  //       tap(_ => console.log('fetched Card with Id: ', cardId)),
  //       catchError(this.handleError<Card>(`getCardById id=${cardId}`))
  //     );
  // }

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
