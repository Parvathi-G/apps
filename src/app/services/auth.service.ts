import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  private apiUrl = 'http://localhost:3000/usersdata';

  constructor(private _http:HttpClient) { }
  // getuserdata(): Observable<SignupModel[]> {
  //   return this._http.get<SignupModel[]>(this.apiUrl);
  // }
  // registerUser(userData: any): Observable<any> {
  //   return this._http.post(this.apiUrl, userData);
  // }
  // signUp(username: string, email: string, password: string): Observable<any> {
  //   return this._http.post<any>('http://localhost:3000/usersdata/signup', { username, email, password });
  // }

  // login(email: string, password: string): Observable<any> {
  //   return this._http.post<any>('http://localhost:3000/usersdata/login', { email, password });
  // }
  registerUser(user: any): Observable<any> {
    return this._http.post<any>('http://localhost:3000/usersdata', user);
  }
  loginUser(loginFormValue: any): Observable<any> {
    return this._http.get<any>('http://localhost:3000/usersdata');
  }
  getUserData() {
    return this._http.get(this.apiUrl);
  }

  updateUserData(userData: any) {
    return this._http.put(this.apiUrl, userData);
  }

  // changePassword(newPassword: string) {
  //   return this._http.put(`${this.apiUrl}/password`, { newPassword });
  // }
  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    const url = `${this.apiUrl}`; // Endpoint for changing password
    const body = { currentPassword, newPassword };
    return this._http.post(url, body);
  }
 

}
