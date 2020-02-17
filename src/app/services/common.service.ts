import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  token = this.authService.getToken();

  public accessWithOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
  }


  loginService(data) {
    return this.http.post(this.API_URL + `/login`, data, this.accessWithOptions);
  }

  orderCreate(data: Object) {
    return this.http.post(this.API_URL + `/order`, data, this.accessWithOptions);
  }

  orderList() {

    let accessWithOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.get(this.API_URL + `/orders`, this.accessWithOptions);
  }

  orderInfo(id: Number) {

    let accessWithOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.get(this.API_URL + `/order/${id}`, this.accessWithOptions);
  }

  orderUpdate(data: Object, id: Number) {

    let accessWithOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.put(this.API_URL + `/order/${id}`, data, this.accessWithOptions);
  }

  orderDelete(id: Number) {

    let accessWithOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.get(this.API_URL + `/orderdelete/${id}`, this.accessWithOptions);
  }

}
