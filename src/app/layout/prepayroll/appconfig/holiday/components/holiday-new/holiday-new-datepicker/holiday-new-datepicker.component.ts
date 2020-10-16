import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';

import {
  HolidayService,
  HolidayModel,
  HolidayDto,
  HolidayObject
} from './../../../holiday.service';

@Component({
  selector: 'app-holiday-new-datepicker',
  templateUrl: './holiday-new-datepicker.component.html',
  styleUrls: ['./holiday-new-datepicker.component.scss']
})
export class HolidayNewDatepickerComponent implements OnInit {

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'yyyy-mm-dd'
    // other options are here...
  };

  model: IMyDateModel = null;
  locale = 'es';

  holidayLocal: HolidayObject

  constructor(private holidayService: HolidayService,) {
    this.holidayService.holidayState.subscribe(data => {
      this.holidayLocal = data
    })
  }

  ngOnInit(): void {
  }

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    this.holidayLocal.holidayForm.patchValue({
      holidayDate: event.singleDate.formatted,
    });
  }
}
