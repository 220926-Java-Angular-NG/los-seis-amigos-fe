import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of,map, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = '';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    }
    )
  };

  getUser(id:number):Observable<User>{
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`Fetch user with id: ${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
      )

  }

  updateUser(user:User):Observable<any>{
    return this.http.put(this.userUrl,user,this.httpOptions).pipe(
      tap(_ => this.log(`Updated the user with id: ${user.userid}`)),
      catchError(this.handleError<any>(`updateUser`))
    );
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.userUrl,user,this.httpOptions).pipe(
      tap((newUser:User) => this.log(`Added the user with id: ${newUser.userid}`)),
      catchError(this.handleError<User>(`addUser`))
    );
  }


  searchUsers(term:string):Observable<User[]>{

    if(!term.trim()){
      return of([]);
    }
    return this.http.get<User[]>(`${this.userUrl}/?username=${term}`).pipe(
      tap(x => x.length?
        this.log(`Found the users matching "${term}"`):
        this.log(`No users matching "${term}"`)
        ),
      catchError(this.handleError<User[]>(`searchUsers`,[]))
    )
  }



  private log(message:string){
    console.log(`HeroService ${message}`);
  }

  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  constructor(private http:HttpClient) { }

}
