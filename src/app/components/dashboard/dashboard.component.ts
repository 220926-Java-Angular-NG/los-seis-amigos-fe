import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  home:any = FormGroup;
  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }
  toRegister(){
    this.router.navigate(['register'])
  }

  toLogin(){
    this.router.navigate(['login']);
  }
  toUser(){
    this.router.navigate(['user']);
  }
}
