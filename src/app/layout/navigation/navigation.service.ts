import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

import { NavigationObject } from './models/navigation.model';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  // State
  private navigationSubject = new BehaviorSubject<NavigationObject>(
    new NavigationObject()
  );
  navigationState = this.navigationSubject.asObservable();

  constructor() { }
  changeNavigationObject(record) {
    this.navigationSubject.next(record);
  }

  actionFromService(){
    console.log('estoy logueado')
  }
}
