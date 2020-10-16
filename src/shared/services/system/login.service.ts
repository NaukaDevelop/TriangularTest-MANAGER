import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// vendor
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { EnvService } from 'src/shared/environment';

import { UserModel, LoginUserModel } from 'src/shared/models';


@Injectable()
export class LoginService {
  private messageSource = new BehaviorSubject<string>('Default message');
  currentMessage = this.messageSource.asObservable();

  public authenticated: BehaviorSubject<boolean>;
  public currentUser: BehaviorSubject<LoginUserModel>;
  public tick: Subject<number>;

  constructor(
    private http: HttpClient,
    private env: EnvService,
    private router: Router
  ) {
    this.authenticated = new BehaviorSubject<boolean>(false);
    this.currentUser = new BehaviorSubject<LoginUserModel>(
      new LoginUserModel()
    );
  }

  apiUrl = this.env.apiUrl;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // Login user
  loginUser(username: string, password: string): Observable<LoginUserModel> {
    const urlapi = `${this.apiUrl}/api/Userbases/login?include=user`;

    return new Observable((obs) => {
      const user = {
        id: 'string',
        ttl: 'number',
        created: 'string',
        userId: 'number',
        user: {
          id: 'format_list_numbered',
          firstname: 'string',
          lastname: 'string',
          profile: 'string',
          realm: 'string',
          username: 'string',
          password: 'string',
          email: 'string',
          user_legal_id: 'string',
          user_internal_id: 'string',
          user_photo_path: 'string',
        },
      };

      obs.next(user);
    });
  }

  // logout from backend
  logoutUser() {
    const temp = localStorage.getItem('currentUser');
    const authToken = JSON.parse(temp).id;
    const urlapi = `${this.apiUrl}/api/Userbases/logout?authToken=${authToken}`;
    return this.http.post<UserModel>(urlapi, {
      headers: this.headers,
    });
    this.authenticated.next(false);
  }
}
