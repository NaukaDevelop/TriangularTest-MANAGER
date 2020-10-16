import { Router } from '@angular/router';
// src/app/services/interceptor.service.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TranslateErrorService } from './transtale-error.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private translateErrorService: TranslateErrorService) {}

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authToken = '';
    const temp = localStorage.getItem('currentUser');
    temp ? (authToken = JSON.parse(temp).id) : '';

    const params: HttpParams = new HttpParams().append(
      'auth_token',
      `${authToken}`
    );

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      appName: 'Cambaceros',
    });

    const clone = req.clone({
      headers,
      params,
    });

    return next.handle(clone).pipe(catchError(this.handleError));
  }
}
