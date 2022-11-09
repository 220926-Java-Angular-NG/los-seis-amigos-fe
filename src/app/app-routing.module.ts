import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProductWrapperComponent } from './components/product-wrapper/product-wrapper.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path:'login',component:LoginComponent}, 
  {path:'register', component:RegisterComponent},
  {path:'home',component:DashboardComponent},
  {path:'items', component:ProductWrapperComponent},
  {path:'cart', component:CartComponent},
  {path:'profile', component:ProfileComponent},
  {path:'reset', component:ResetPasswordComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'**', redirectTo:'home',pathMatch:"full"}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
