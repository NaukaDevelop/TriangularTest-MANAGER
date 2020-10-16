import { Injectable } from '@angular/core';
import { MainDashboardObject } from './models/main-dashboard.model';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainDashboardService {
  // State
  private mainDashboardSubject = new BehaviorSubject<MainDashboardObject>(
    new MainDashboardObject()
  );
  mainDashboardState = this.mainDashboardSubject.asObservable();

  constructor() { }

  changeMainDashboardObject(record) {
    this.mainDashboardSubject.next(record);
  }

}
