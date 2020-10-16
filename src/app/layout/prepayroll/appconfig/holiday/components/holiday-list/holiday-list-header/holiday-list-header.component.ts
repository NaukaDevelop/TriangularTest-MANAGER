import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import { HolidayService,HolidayModel, HolidayObject } from '../../../holiday.service';

import { MatDialog } from '@angular/material/dialog';

import { HolidayDeleteComponent } from './../../holiday-delete/holiday-delete.component'



@Component({
  selector: 'app-holiday-list-header',
  templateUrl: './holiday-list-header.component.html',
  styleUrls: ['./holiday-list-header.component.scss']
})
export class HolidayListHeaderComponent implements OnInit {

  holidayLocal: HolidayObject

  constructor(private holidayService: HolidayService, private router: Router, private dialog: MatDialog,) {
    this.holidayService.holidayState.subscribe(data => {
      this.holidayLocal = data
    })
  }

  ngOnInit(): void {
  }



  onGetList() {
    this.holidayLocal.holidayAction = 'list';
    this.holidayService.changeHolidayObject(this.holidayLocal)
  }

  onEditRecord() {
    this.router.navigate(["layout/navigation/nav/holiday/holiday/holiday-edit"])

  }

  onFind() {
    this.router.navigate(["layout/navigation/nav/holiday/holiday/holiday-find"])
  }

  onNewRecord() {
    this.router.navigate(["layout/navigation/nav/holiday/holiday/holiday-new"])
  }

  onExportToCsv() {
    this.holidayLocal.holidayAction = 'export';
    this.holidayService.changeHolidayObject(this.holidayLocal);
  }

  /******************************************************** */
  // Detail Dialog

  onDeleteRecord() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HolidayDeleteComponent
      , {
        panelClass: 'custom-dialog-container',
        width: '350px',
        height: '350px',
        data: {
          holidaySelected: this.holidayLocal.holidaySelected,
        },
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.warn('Gracias')
      }
    });
  }

}
