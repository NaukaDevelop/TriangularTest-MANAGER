import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (this.isLogged()) {
      return true;
    }
    this.router.navigate(['/auth-denied']);
    return false;
  }

  isLogged() {
    let result = false;

    const temp = JSON.parse(localStorage.getItem('currentUser'));
    // console.log('temp', temp);

    if (temp && temp.id) {
      result = true;
    }
    return result;
  }
}
