import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

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

import { HolidayService, HolidayModel, HolidayObject } from './../../holiday.service';

@Component({
  selector: 'app-holiday-edit',
  templateUrl: './holiday-edit.component.html',
  styleUrls: ['./holiday-edit.component.scss']
})
export class HolidayEditComponent implements OnInit {

  holidayLocal: HolidayObject
  recordForm: FormGroup;

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
    // this.holidayLocal.holidaySelected == undefined || this.holidayLocal.holidayAction == 'edit';
    this.holidayService.changeHolidayObject(this.holidayLocal);
    this.onFillForm();
  }



  onFillForm() {
    this.recordForm = this.formBuilder.group({
      holidayId: [this.holidayLocal.holidaySelected.holidayId],
      holidayDescription: [this.holidayLocal.holidaySelected.holidayDescription, [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.recordForm.controls;
  }

  onReturn() {
    this.router.navigate(["layout/navigation/nav/holiday/holiday/holiday-list"])
  }

  onSubmit() {
    let item = this.recordForm.value;
    this.onEditRecord(item.holidayId, item)
  }

  onEditRecord(holidayId: string, item: HolidayModel) {
    this.holidayService.updateHoliday(holidayId, item).subscribe(
      data => {
        this.holidayLocal.holidayArray ? this.holidayLocal.holidayArray[this.holidayLocal.holidayIndex] = data : '';
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
