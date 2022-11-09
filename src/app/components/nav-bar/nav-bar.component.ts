import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  collapse:boolean = false
  isLoggedIn:boolean = false

  constructor(private router: Router, private userService:UserService) { 

    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.isLoggedIn = this.userService.isLoggedIn()
        if(!this.isLoggedIn && 
            ( 
              router.url !== '/home' && 
              router.url !== '/login' && 
              router.url !== '/register' && 
              router.url !== '/reset'
            )) this.router.navigate(['home']);
      }
    });


   }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn()
    
  }

  toggleCollapse(newCollapseVal:boolean = this.collapse) {
    this.collapse = !newCollapseVal
  }
  goToCart() {
    this.router.navigate(['/cart'])
  }
  logout() {
    this.userService.logout()
    this.router.navigate(['home'])
  }

}
