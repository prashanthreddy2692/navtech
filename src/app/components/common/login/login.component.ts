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

  constructor(
    private formBuilder: FormBuilder,
    private service: CommonService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  doLogin() {

    if (this.loginForm.invalid) {
      return;
    }

    let postData = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

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
        }
      );

  }

}
