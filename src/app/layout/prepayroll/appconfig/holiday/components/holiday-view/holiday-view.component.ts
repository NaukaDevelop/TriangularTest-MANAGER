import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn
} from "@angular/forms";

import { HolidayService, HolidayModel, HolidayObject } from './../../holiday.service';

@Component({
  selector: 'app-holiday-view',
  templateUrl: './holiday-view.component.html',
  styleUrls: ['./holiday-view.component.scss']
})
export class HolidayViewComponent implements OnInit {

  holidayLocal: HolidayObject
  recordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private holidayService: HolidayService, private router: Router) {
    this.holidayService.holidayState.subscribe(data => {
      this.holidayLocal = data
    })
  }

  ngOnInit(): void {
    this.onFillForm();
  }

  onFillForm() {

    if (this.holidayLocal.holidaySelected == undefined || this.holidayLocal.holidayAction == 'new') {
      this.holidayLocal.holidaySelected = new HolidayModel()
      this.holidayService.changeHolidayObject(this.holidayLocal)
    }

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
  }

  onEditRecord() {
    this.holidayService.changeHolidayObject(this.holidayLocal);
    this.router.navigate(["layout/navigation/nav/holiday/holiday/holiday-edit"])
  }

}
