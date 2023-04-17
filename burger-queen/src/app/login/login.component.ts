
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  formLogin: FormGroup;


  constructor(
    private  router: Router,
    private  builder: FormBuilder,
    private  auth: AuthService) {
    this.formLogin = this.builder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  login(){
    const val = this.formLogin.value;
    this.auth.login(val.user, val.password).subscribe((data) => {
      console.log(data);
      if(val.user && val.password){
        this.auth.login(val.user, val.password)
        .subscribe(
          () => {
            this.router.navigateByUrl('home')
          }
        )
      }


    });
  }


    // const val = this.formLogin.value;


  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // get formlogin() { return this.form.controls; }

  // ngOnInit() {
  //   this.loginform();
  // }
  // loginform(){

  //}
  // user = new FormControl('', Validators.required);
  // password = new FormControl('', [Validators.required, Validators.minLength(6)]);

// onSubmit(): void {
//   const data = this.form.value;

//   this.service.login(data.user, data.password).suscribe({
//     next:(result) =>{
//       sessionStorage.setItem('token', result.accesToken)
//       console.log(result.accesToken);
//       this.router.navigate(['home']);
//     }
//     error: (error) => {
//       console.log(error);
//       if (error.status === 400) {
//         this.toastr.error(error.error, 'Credenciales no validas');
//       } else {
//         this.toastr.error('An unexpected error occurred', 'Error');
//       }
//     },
//   })

  // if (this.formlogin.user.status === 'INVALID' || this.formlogin.password.status === 'INAVALID') {
  //   return;
  // }

// this.auth$.login(values.user, values.password)
// .pipe(first())
// .subscribe(response=>{
//   debugger;
//   console.log(response);
//   if (response){
//     localStorage.setItem('Token', response);
//     this.router$.navigate(['/home']);
//   }
// })
//}


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

