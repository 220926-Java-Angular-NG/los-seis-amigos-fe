import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { CartItem } from '../components/cart-item/CartItem';
import { cardOwned } from './cardsOwned';

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


  public openSet(cartItem:CartItem) {
    return this.http.post<cardOwned[]>(this.cardsOwnedUrl+`/${cartItem.user.id}/${cartItem.set.setcode}`,this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched Card with Id: ', cartItem.cartItemId)),
        catchError(this.handleError<cardOwned>(`getCardById id=${cartItem.cartItemId}`))
      );
  }

  public getUserCards(userId:number) {
    return this.http.get<cardOwned[]>(`${this.cardsOwnedUrl}/userId=${userId}/display`, this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched cards owned for userId: ', userId)),
        catchError(this.handleError<cardOwned[]>(`getUserCards id=${userId}`))
      );
  }

  public getUserOwnedSets(userId:number) {
    return this.http.get<string[]>(`${this.cardsOwnedUrl}/sets/${userId}`, this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched owned setfor userId: ', userId)),
        catchError(this.handleError<string[]>(`getUserOwnedSets id=${userId}`))
      );
  }

  public getUserOwnedCardsBySet(userId:number, setcode:string) {
    return this.http.get<cardOwned[]>(`${this.cardsOwnedUrl}/${userId}/${setcode}`, this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched owned cards for set, userId: ',setcode, userId)),
        catchError(this.handleError<cardOwned[]>(`getUserOwnedCardsBySet set=${setcode}, id=${userId}`))
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
