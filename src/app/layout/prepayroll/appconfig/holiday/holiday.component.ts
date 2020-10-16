
import { Component, OnInit } from '@angular/core';

import { HolidayService, HolidayModel, HolidayObject } from './holiday.service';

import { NavigationObject } from 'src/app/layout/navigation/models/navigation.model';
import { NavigationService } from 'src/app/layout/navigation/navigation.service';


@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {


  holidayLocal: HolidayObject
  navigationLocal: NavigationObject

  constructor(
    private holidayService: HolidayService,
    private navigationService: NavigationService
  ) {
      // Navigation config
    this.navigationService.navigationState.subscribe(data => {
      this.navigationLocal = data
    })
    this.navigationLocal.title = 'Días Feriados'
    this.navigationService.changeNavigationObject(this.navigationLocal);

    // Holiday config
    this.holidayService.holidayState.subscribe(data => {
      this.holidayLocal = data
    })
    this.holidayLocal.holidayTitle = 'Días Feriados'
    this.holidayLocal.holidaySubtitle = 'Días festivos del año'
    this.holidayLocal.holidayAction = 'list'
    this.holidayLocal.holidaySelected = new HolidayModel()
    this.holidayService.changeHolidayObject(this.holidayLocal)
  }

  ngOnInit(): void {

  }


  logout() {
    this.navigationLocal.isAuthenticated = !this.navigationLocal.isAuthenticated;
    this.navigationService.changeNavigationObject(this.navigationLocal)
  }

}
