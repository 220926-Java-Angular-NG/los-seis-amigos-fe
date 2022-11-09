import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-services/user.service';
import { UserInterface } from '../profile/userInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      username:['',Validators.compose([Validators.required])],
      password:['', Validators.required]
    })
  }

  loginSubmit(data:any){

    this.userService.login(data.username, data.password).subscribe(_user => {
      console.log(_user.id)
      if (_user.id !== null) {
        this.router.navigate(['items'])
      }
    })

  }

  toRegister(){
    this.router.navigate(['register'])
  }

  toDash(){
    this.router.navigate(['home']);
  }

}
