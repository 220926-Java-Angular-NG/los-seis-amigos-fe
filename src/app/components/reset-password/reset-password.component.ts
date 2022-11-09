import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetCredentials:any = FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private userService:UserService) { }


  ngOnInit(): void {
    this.resetCredentials = this.fb.group({
      username:['',Validators.compose([Validators.required])],
      password:['', Validators.required],
      newPassword:['', Validators.required]
    })
  }

  resetSubmit(data:any) {
    this.userService.resetPassword(data.username, data.password, data.newPassword).subscribe(_user => {
      if (_user !== null)
        console.log('changed password: ', _user)
      else console.log('wrong password')
    })
  }

  toDash() {
    this.router.navigate(['home'])
  }

}
