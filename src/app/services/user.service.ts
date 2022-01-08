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

  isLoggedIn: Boolean = false;

  isAdmin: Boolean = false;

  constructor(private http: HttpClient) { }

  authenticateUser(user: User): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/authenticate`, user, { responseType: 'text'});
  }

  setIsAdmin(isAdmin: Boolean): void {
    this.isAdmin = isAdmin;
  }

  getIsAdmin(): Boolean {
    return this.isAdmin;
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/register`, user, { responseType: 'text'});
  }

}
