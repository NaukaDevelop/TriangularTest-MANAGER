import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// vendor
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { EnvService } from 'src/shared/environment/env.service';

import { UserbaseModel } from 'src/shared/models';
import { CurrentUserModel } from 'src/shared/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private messageSource = new BehaviorSubject<string>('Default message');
  currentMessage = this.messageSource.asObservable();

  public authenticated: BehaviorSubject<boolean>;
  public currentUser: BehaviorSubject<CurrentUserModel>;
  public tick: Subject<number>;



  constructor(
    private http: HttpClient,
    private env: EnvService,
    private router: Router
  ) {
    this.authenticated = new BehaviorSubject<boolean>(false);
    this.currentUser = new BehaviorSubject<CurrentUserModel>(
      new CurrentUserModel()
    );
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  tickObservable() {
    return this.tick.asObservable();
  }

  setAuthenticationValue(): void {
    let status = false;
    const newValue = localStorage.getItem('authToken');
    if (newValue !== null) {
      status = true;
    }
    this.authenticated.next(status);
  }

  getAuthenticationValue(): Observable<boolean> {
    let status = false;
    const newValue = localStorage.getItem('authToken');
    if (!isNullOrUndefined(newValue)) {
      status = true;
    }
    this.authenticated.next(status);
    return this.authenticated.asObservable();
  }

  // Read user from local_store
  getCurrentUser() {
    let result = null;
    const newValue = JSON.parse(localStorage.getItem('currentUser'));
    if (!isNullOrUndefined(newValue)) {
      result = newValue;
    }
    return result;
  }

  // Login user
  loginUser(username: string, password: string): Observable<CurrentUserModel> {
    const url_api = `${this.env.apiUrl}/api/Userbases/login?include=user`;
    return this.http
      .post<CurrentUserModel>(
        url_api,
        { username, password },
        { headers: this.headers }
      )
      .pipe(map((data) => data));
    // this.authenticated.next(true);
  }

  // logout from backend
  logoutUser() {
    const temp = localStorage.getItem('currentUser');
    const authToken = JSON.parse(temp).id;
    const url_api = `${this.env.apiUrl}/api/Userbases/logout?authToken=${authToken}`;
    return this.http.post<UserbaseModel>(url_api, {
      headers: this.headers,
    });
    this.authenticated.next(false);
  }

  // Check in database if user exists
  checkIfExists(user) {
    const authToken = localStorage.getItem('authToken');
    const url_api = `${this.env.apiUrl}/api/Userbases/checkIfExists`;

    return this.http
      .post<any>(url_api, user, { headers: this.headers })
      .pipe(map((data) => data));
  }

  // Check if auth token is present in local store
  isAuthenticated(): boolean {
    let result = false;
    const authToken = localStorage.getItem('currentUser');
    if (authToken) {
      result = true;
    }
    return result;
  }

  isToken() {
    this.authenticated;
  }

  /* SETTERS ****************** */

  // Record user in local store
  setUser(user: CurrentUserModel) {
    const userString = JSON.stringify(user);
    localStorage.setItem('currentUser', userString);
  }

  // Record token in local store
  setToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Read token from local_store
  // getToken() {
  //   newValue;
  // }
}
