import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any = FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required],
      repassword:['',Validators.required]
      
    });
  }
  regSubmit(data:any){

    if (data.password == data.repassword) {
      console.log(data);
    } else {
      alert("Please ensure passwords match.");
    }


  }
  toLogin(){
    this.router.navigate(['login']);
  }

  toDash(){
    this.router.navigate(['home']);
  }

}
function compose(arg0: (((control: import("@angular/forms").AbstractControl<any, any>) => import("@angular/forms").ValidationErrors | null) | ((pattern: string | RegExp) => import("@angular/forms").ValidatorFn))[]): any {
  throw new Error('Function not implemented.');
}

