import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  // apiurl: string = 'http://localhost:8080/login';

  login(user: string, password: string): Observable<string> {
    return this.http.post<string>('/login', {user, password})
  }

}
/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient ) { }

  login(user: string, password: string): Observable<any> {
    return this.http.post("http://localhost:8080", {user, password});
  }

}
 */