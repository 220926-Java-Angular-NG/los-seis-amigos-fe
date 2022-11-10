import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { UserInterface } from 'src/app/components/profile/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/users'
  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // register user and store userId inside localStorage
  registerUser(user:UserInterface) {
    return this.http.post<UserInterface>(`${this.userUrl}/register`, user, this.httpOptions).pipe(
      tap(_user => {
        console.log(`Registered User = ${_user}`)
        if (_user.id) {
          localStorage.setItem('userId', _user.id.toString())
          // this.loggedIn = true
          // this.currentUser = _user
        }
      }),
      catchError(this.handleError<UserInterface>(`registerUser user=${user}`))
    )
  }

  // get user from backend
  fetchUser() {
    const userIdString:any = localStorage.getItem('userId')
    let userId:number = 0
    if (typeof userIdString === 'string')
      userId = Number.parseInt(userIdString)
    return this.http.get<UserInterface>(`${this.userUrl}/${userId}`, this.httpOptions).pipe(
      tap(_user => {
        console.log(`Retrieved User = ${_user}`)
      }),
      catchError(this.handleError<UserInterface>(`getUser user=${userId}`))
    )
  }

  public login(username:string, password:string) {
    const user:UserInterface = {
      id:0,
      username,
      password
    }
    // console.log(user)
    return this.http.post<UserInterface>(`${this.userUrl}/login`, user, this.httpOptions).pipe(
      tap(_user => {
        console.log(`Logged In User = ${_user}`)
        if (_user.id) {
          localStorage.setItem('userId', _user.id.toString())
        }
      }),
      catchError(this.handleError<UserInterface>(`login user=${user}`))
    )
  }

  public isLoggedIn():boolean {
    const userIdString:any = localStorage.getItem('userId')
    let userId:number = 0
    if (typeof userIdString === 'string')
      userId = Number.parseInt(userIdString)
    return userId > 0
  }

  public logout() {
    localStorage.clear()
  }

  public getUserId() {
    if (this.isLoggedIn()) {
      const userIdString:any = localStorage.getItem('userId')
      if (typeof userIdString === 'string')
        return Number.parseInt(userIdString) 
    }
    return 0
  }

  public resetPassword(username:string ,password:string, newPassword:string) {
    const user = {
      username,
      password,
      newPassword
    }
    return this.http.put<UserInterface>(`${this.userUrl}/password`, user, this.httpOptions).pipe(
      tap(_user => {
        console.log(`reset password for User = ${_user}`)
      }),
      catchError(this.handleError<UserInterface>(`login user=${user}`))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      alert("User name does not exist!")
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
