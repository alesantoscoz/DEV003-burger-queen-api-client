/* import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  user = new FormControl('', Validators.required);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

}
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  formLogin: FormGroup;
  // private router$: Router;
  // private builder$: FormBuilder;
  // private auth$: AuthService;


  constructor(
    private  router: Router,
    private  builder: FormBuilder,
    private  toastr: ToastrService,
    private  auth: AuthService) {
    // this.router$ = router;
    // this.builder$ = builder;
    // this.auth$ = auth;

    this.formLogin = this.builder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  login(){
    const val = this.formLogin.value;

    

    if(val.user && val.password){
      this.auth.login(val.user, val.password)
      .subscribe(
        () => {
          this.router.navigateByUrl('home')
        }
      )
    }
  }
}