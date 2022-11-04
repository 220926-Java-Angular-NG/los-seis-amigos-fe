import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:string[] = [
    "A user with this user already exists.",
    "Failed to register.",
    "Succeeded in registering with the provided credentials.",
    "Just testing it out."
  ];

  

  constructor() { }
}
