import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import * as moment from 'moment';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn
} from "@angular/forms";

// Service
import {
  NotificationService,
  TranslateErrorService
} from 'src/shared/services/';

import { HolidayService,HolidayModel, HolidayDto, HolidayObject} from './../../holiday.service';


@Component({
  selector: 'app-holiday-new',
  templateUrl: './holiday-new.component.html',
  styleUrls: ['./holiday-new.component.scss']
})
export class HolidayNewComponent implements OnInit {

  holidayLocal: HolidayObject


  constructor(
    private formBuilder: FormBuilder,
    private holidayService: HolidayService,
    private router: Router,
    private notification: NotificationService,
    private translateErrorService: TranslateErrorService
  ) {
    this.holidayService.holidayState.subscribe(data => {
      this.holidayLocal = data
    })
  }

  ngOnInit(): void {
    this.onFillForm();
  }

  onReturnDateRange($event) {

  }
  onFillForm() {
    this.holidayLocal.holidayDto = new HolidayDto();
    this.holidayService.changeHolidayObject(this.holidayLocal);

    this.holidayLocal.holidayForm = this.formBuilder.group({
      holidayDate: [this.holidayLocal.holidayDto.holidayDate],
      holidayDescription: [this.holidayLocal.holidayDto.holidayDescription, [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.holidayLocal.holidayForm.controls;
  }

  onReturn() {
    this.router.navigate(["layout/navigation/nav/holiday/holiday/holiday-list"])
  }


  onSubmit() {
    let item = this.holidayLocal.holidayForm.value;
    item = {
      holidayDate: this.holidayLocal.holidayForm.value.holidayDate,
      holidayDescription: this.holidayLocal.holidayForm.value.holidayDescription
    }
    this.onCreateRecord(item)
  }

  onCreateRecord(item: HolidayDto) {
    this.holidayService.addHoliday(item).subscribe(
      data => {
        this.holidayLocal.holidayArray ? this.holidayLocal.holidayArray.unshift(data) : '';
        this.holidayLocal.holidaySelected = data
        this.onReturn()
      }, error => {
        console.error('error', JSON.stringify(error))
        this.notification.showError(
          error.error.message,
          error.error.code,
        );
      })
  }


}
