import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-services/user.service';
import { User } from 'src/app/services/user-services/user';
import { MessageService } from 'src/app/services/message-services/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any = FormGroup;
  showMsg:boolean = false;
  displayMsg:string = "";
  

  constructor(private fb:FormBuilder, 
    private router:Router,
    private userService:UserService,
    private msg:MessageService) { }


  ngOnInit(): void {
    this.register = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
      
    });
  }


  regSubmit(data:any){

  let newUser:User = {
    firstname: data["firstname"],
    lastname:  data["lastname"],
    email:  data["email"],
    password:  data["password"],
    hasCart: false
  };

  //this.userService.addUser(newUser).subscribe((genUser) => newUser = genUser);

  console.log(newUser);

  this.flashMsg(3);

  }


  toLogin(){
    this.router.navigate(['login']);
  }

  toDash(){
    this.router.navigate(['home']);
  }

  flashMsg(index:number):void{
    this.showMsg = true;
    this.displayMsg = this.msg.messages[index];

    
  }

}
