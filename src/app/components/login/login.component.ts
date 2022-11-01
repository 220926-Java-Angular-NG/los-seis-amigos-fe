import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['', Validators.required]
    })
  }

  loginSubmit(data:any){
    console.log(data);
  }

  toRegister(){
    this.router.navigate(['register'])
  }

  toDash(){
    this.router.navigate(['home']);
  }
  toUser(){
    this.router.navigate(['user']);
  }
}
