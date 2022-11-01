import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of,map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    }
    )
  };

  constructor(private http:HttpClient) { }
}
