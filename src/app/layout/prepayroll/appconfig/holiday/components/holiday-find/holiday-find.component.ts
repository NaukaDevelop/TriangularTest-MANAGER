import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn
} from "@angular/forms";

import { HolidayService, HolidayModel, HolidayFullDto, HolidayObject } from './../../holiday.service';


@Component({
  selector: 'app-holiday-find',
  templateUrl: './holiday-find.component.html',
  styleUrls: ['./holiday-find.component.scss']
})
export class HolidayFindComponent implements OnInit {

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
    this.holidayLocal.holidayFullDto = new HolidayFullDto()

    this.recordForm = this.formBuilder.group({
      holidayId: [this.holidayLocal.holidayFullDto.holidayId],
      holidaySts: [this.holidayLocal.holidayFullDto.holidaySts],
      holidayChk: [this.holidayLocal.holidayFullDto.holidayChk],
      holidayCreated: [this.holidayLocal.holidayFullDto.holidayCreated],
      holidayUpdated: [this.holidayLocal.holidayFullDto.holidayUpdated],
      holidayData: [this.holidayLocal.holidayFullDto.holidayData],

      holidayDate: [this.holidayLocal.holidayFullDto.holidayDate],
      holidayDescription: [this.holidayLocal.holidayFullDto.holidayDescription, [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.recordForm.controls;
  }

  onReturn() {
    this.router.navigate(["layout/navigation/nav/holiday/holiday/holiday-list"])
  }


  onSubmit(item?: HolidayModel) {
    item = {

      holidayId: this.recordForm.value.holidayId != null ? this.recordForm.value.holidayId : '',

      holidaySts: this.recordForm.value.holidaySts != null ? this.recordForm.value.holidaySts : '',

      holidayChk: this.recordForm.value.holidayChk != null ? this.recordForm.value.holidayChk : '',

      holidayCreated: this.recordForm.value.holidayCreated != null ? this.recordForm.value.holidayCreated : '',

      holidayUpdated: this.recordForm.value.holidayUpdated != null ? this.recordForm.value.holidayUpdated : '',

      holidayData: this.recordForm.value.holidayData != null ? this.recordForm.value.holidayData : '',



      holidayDate: this.recordForm.value.holidayDate != null ? this.recordForm.value.holidayDate : '',
      holidayDescription: this.recordForm.value.holidayDescription != null ? this.recordForm.value.holidayDescription : ''
    }
    this.onFind(item)
  }


  onFind(item: HolidayModel) {

    this.holidayService.findByFilter(item).subscribe(
      data => {

        console.log('data', data)
        this.holidayLocal.holidayArray = data
        this.holidayService.changeHolidayObject(this.holidayLocal)

        this.onReturn()
      })
  }

}
