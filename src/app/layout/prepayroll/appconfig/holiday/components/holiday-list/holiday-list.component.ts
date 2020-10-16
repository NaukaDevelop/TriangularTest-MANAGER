import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
// Vendor
import { Ng2SearchPipe } from 'ng2-search-filter';

import {
  NotificationService,
  TranslateErrorService,
} from "src/shared/services/";

import { HolidayService,HolidayModel, HolidayObject } from '../../holiday.service';

import { HolidayDeleteComponent } from './../holiday-delete/holiday-delete.component'

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent implements OnInit {

  term

  holidayLocal: HolidayObject

  private holidayList: Array<any>;


  constructor(
    private holidayService: HolidayService,
    private router: Router,
    private notification: NotificationService,
    private dialog: MatDialog,
    private translateErrorService: TranslateErrorService,
  ) {
    this.holidayService.holidayState.subscribe(data => {
      this.holidayLocal = data
      if (this.holidayLocal.holidayAction == 'list') {
        this.onGetList();
        this.holidayLocal.holidayAction = null;
        this.holidayService.changeHolidayObject(this.holidayLocal)
      }
    })
  }


  ngOnInit(): void {
  }

  onGoToDetail() {
    this.router.navigate(["layout/navigation/nav/holiday/holiday/holiday-detail"])
  }

  onGetList() {
    this.holidayService.listHoliday().subscribe(
      data => {
        this.holidayList = data
        this.holidayLocal.holidayArray = this.holidayList;
        this.holidayLocal.holidaySelected = null;
        this.holidayService.changeHolidayObject(this.holidayLocal)
      }, error => {
        console.error('error', error);
        this.notification.showError(
          `${error.status
          }: ${this.translateErrorService.translateErrorNumber(
            error.status
          )}`,
          "Error de onGetList"
        );
      })
  }

  onSelectRecord(item, i) {
    this.holidayLocal.holidaySelected = item;
    this.holidayLocal.holidayIndex = i;
    this.holidayService.changeHolidayObject(this.holidayLocal)
  }

  onDeleteRecord(item, i) {
    this.holidayLocal.holidayIndex = i;
    this.holidayService.changeHolidayObject(this.holidayLocal)
    this.openDialog();
  }

  onViewRecord(item, i) {
    this.holidayLocal.holidaySelected = item;
    this.holidayLocal.holidayIndex = i;
    this.holidayService.changeHolidayObject(this.holidayLocal)
    this.router.navigate(["layout/navigation/nav/holiday/holiday/holiday-view"])
  }

  onEditRecord(item, i) {
    this.holidayLocal.holidaySelected = item;
    this.holidayLocal.holidayIndex = i;
    this.holidayService.changeHolidayObject(this.holidayLocal);
    this.router.navigate(["layout/navigation/nav/holiday/holiday/holiday-edit"])
  }



  /******************************************************** */
  // Detail Dialog
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
