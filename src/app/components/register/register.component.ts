import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-services/user.service';
import { UserInterface } from '../profile/userInterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any = FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
      
    });
  }

  //TODO: call register in userService
  regSubmit(data:UserInterface){
    
    this.userService.registerUser(data).subscribe(_user => {
      console.log(_user);
      if (_user.id !== null) {
        localStorage.setItem('userId', _user.id.toString())
        this.router.navigate(['items'])
      }
    })

  }
  toLogin(){
    this.router.navigate(['login']);
  }

  toDash(){
    this.router.navigate(['home']);
  }

}
