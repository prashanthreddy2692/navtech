import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  remember: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private service: CommonService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: ['']
    });

    let userData = this.authService.getUserData();

    if (Object.keys(userData).length > 0) {
      this.remember = true;
      this.loginForm.patchValue(userData);
    }

  }

  doLogin() {

    if (this.loginForm.invalid) {
      return;
    }

    let postData = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.rememberMe(this.remember);

    this.service.loginService(postData)
      .subscribe(
        (response: any) => {
          if (response.error == false) {
            this.authService.setToken(response.token);
            alert(response.message);
            this.router.navigateByUrl('/order-list');
          } else {
            console.log("Login Service Data:", response);
          }
        },
        (error: any) => {
          console.log("Login Service Error:", error);
          alert(error.message);
        }
      );

  }

  rememberMe(event) {

    let userData = {}
    this.remember = event;

    if (event) {
      userData = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
      this.authService.setUserData(userData, event);
    } else {
      this.authService.setUserData(userData, event);
    }

  }

}
