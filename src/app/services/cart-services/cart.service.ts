import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { CartItem } from 'src/app/components/cart-item/CartItem';
import { UserService } from '../user-services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = 'http://localhost:8080/carts'
  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCartByUserId(userId: number): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartUrl+`/user/${userId}`)
      .pipe(
        tap(_ => console.log('fetched Cart for userId: ', userId)),
        catchError(this.handleError<CartItem[]>(`getCartByUserId userId=${userId}`))
      );
  }

  
  addCartItem(cartItem:CartItem) {
    return this.http.post<CartItem>(this.cartUrl, cartItem, this.httpOptions).pipe(
      tap(newItem => console.log(`created cartItem = ${newItem}`)),
      catchError(this.handleError<CartItem>(`addCartItem userId=${cartItem}`))
    )
  }

  updateCartItemQuantity(cartItemId:number, quantity:number) {
    return this.http.put<CartItem>(`${this.cartUrl}/item/${cartItemId}/quantity/${quantity}`, this.httpOptions).pipe(
      tap(newItem => console.log(`updated cartItem = ${newItem}`)),
      catchError(this.handleError<CartItem>(`updateCartItemQuantity cartItem=${cartItemId}`))
    )
  }

  removeCartItemById(cartItemId:number) {
    return this.http.delete(`http://localhost:8080/carts/item/${cartItemId}`, this.httpOptions)
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
