import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProductWrapperComponent } from './components/product-wrapper/product-wrapper.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent}, 
  {path:'register', component:RegisterComponent},
  {path:'home',component:DashboardComponent},
  {path:'items', component:ProductWrapperComponent},
  {path:'**', redirectTo:'home',pathMatch:"full"}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
