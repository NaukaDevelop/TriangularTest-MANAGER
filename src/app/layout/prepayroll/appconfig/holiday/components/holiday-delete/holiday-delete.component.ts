import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HolidayService, HolidayModel, HolidayObject } from './../../holiday.service';

@Component({
  selector: 'app-holiday-delete',
  templateUrl: './holiday-delete.component.html',
  styleUrls: ['./holiday-delete.component.scss']
})
export class HolidayDeleteComponent implements OnInit {

  // localData;

  holidayLocal: HolidayObject;

  constructor(public dialogRef: MatDialogRef<HolidayDeleteComponent>,
    private holidayService: HolidayService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // this.localData = this.data.holidaySelected;
    this.holidayService.holidayState.subscribe(data => {
      this.holidayLocal = data
    })
  }

  ngOnInit(): void {
  }

  onDeleteRecord() {
    let holidayId = this.data.holidaySelected.holidayId
    this.holidayService.deleteHoliday(holidayId).subscribe(
      data => {
        if (data.deleted == true) {
          this.holidayLocal.holidayArray.splice(this.holidayLocal.holidayIndex, 1);
          this.onCloseModal();
        }
      }, error => {
        console.error('error', error);
        this.onCloseModal();
      })
  }

  onCloseModal() {
    this.dialogRef.close();
  }

}
