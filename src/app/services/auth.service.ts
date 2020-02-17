import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  setToken(token: string) {
    sessionStorage.setItem('access_token', JSON.stringify(token));
  }

  getToken() {

    let token = JSON.parse(sessionStorage.getItem('access_token'));

    if (token) {
      return token;
    } else {
      return false;
    }

  }

  clearToken() {
    sessionStorage.removeItem('access_token');
  }


}
