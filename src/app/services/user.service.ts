import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBaseUrl: String = environment.apiBaseUrl;

  user: User = {};

  constructor(private http: HttpClient) { }

  authenticateUser(user: User): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/authenticate`, user, {responseType: 'text'});
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/register`, user, {responseType: 'text'});
  }

  setUserData(user: User): void {
    this.user = user;
  }

  getUserData(): User {
    return this.user;
  }

  changePassword(user: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/change_password`, user, {responseType: 'text'});
  }

  deleteAccount(user: User): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/delete_user`, {body: user, responseType: 'text'});
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/users`);
  }

  makeAdmin(username: String): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/users/makeAdmin`, { "username": username }, {responseType: 'text'});
  }

  removeAdminStatus(username: String): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/users/removeAdminStatus`, { "username": username }, {responseType: 'text'});
  }

  deleteUser(id: String): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/users/delete/` + id, {responseType: 'text'});
  }

}
