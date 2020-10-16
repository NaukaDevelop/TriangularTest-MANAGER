import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  // HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';

// Services
import { NotificationService } from 'src/shared/services/';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptorService {
  private requests: HttpRequest<any>[] = [];

  constructor(
    private loaderService: LoaderService,
    private notification: NotificationService
  ) { }

  removeRequest(req: HttpRequest<any>): void {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.next(this.requests.length > 0);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requests.push(req);

    this.loaderService.isLoading.next(true);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Observable.create((observer) => {
      const subscription = next.handle(req).subscribe(
        (event) => {
          if (event instanceof HttpResponse) {
            this.removeRequest(req);
            observer.next(event);
          }
        },
        (err) => {
          // alert('Error on loader' + err);

          // this.notification.showError(err.msg, 'Error en backend');

          this.removeRequest(req);
          observer.error(err);
        },
        () => {
          this.removeRequest(req);
          observer.complete();
        }
      );
      // remove request from queue when cancelled
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }
}
