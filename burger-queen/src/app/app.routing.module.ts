import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';
import { Routes , RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes :Routes=[
  {path:'', component: LoginComponent,pathMatch: "full"},//crear objeto por cada ruta
  {path:'home', canActivate: [AuthGuard], component:HomeComponent, pathMatch: "full"}
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
