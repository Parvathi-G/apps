import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  updateUserProfile(id:number,updatedProfile: any): Observable<any> {
    return this.http.put(`http://localhost:3000/usersdata/${id}`, updatedProfile);
  }
  
}
