import { Component, OnInit, OnDestroy } from '@angular/core';

import { HolidayService, HolidayModel, HolidayObject } from '../../../holiday.service';

import { Ng2SearchPipe } from 'ng2-search-filter';

@Component({
  selector: 'app-holiday-list-filter',
  templateUrl: './holiday-list-filter.component.html',
  styleUrls: ['./holiday-list-filter.component.scss']
})
export class HolidayListFilterComponent implements OnInit {

  term

  holidayLocal: HolidayObject

  newArray


  constructor(private holidayService: HolidayService, private filterPipe: Ng2SearchPipe) {
    this.holidayService.holidayState.subscribe(data => {
      this.holidayLocal = data
    })

    this.holidayLocal.holidayFilteredArray = filterPipe.transform(this.holidayLocal.holidayArray, this.term)
    // console.log(this.holidayLocal.holidayFilteredArray)
    this.holidayService.changeHolidayObject(this.holidayLocal)
  }

  ngOnInit(): void {
  }


}
