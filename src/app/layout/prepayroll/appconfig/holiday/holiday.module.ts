

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Vendor
import { MaterialModule } from 'src/app/core/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';

import { HolidayRoutingModule } from './holiday.routing';
import { HolidayComponent } from './holiday.component';

import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { HolidayListHeaderComponent } from './components/holiday-list/holiday-list-header/holiday-list-header.component';
import { HolidayListExportComponent } from './components/holiday-list/holiday-list-export/holiday-list-export.component';
import { HolidayListFilterComponent } from './components/holiday-list/holiday-list-filter/holiday-list-filter.component';


import { HolidayNewComponent } from './components/holiday-new/holiday-new.component';
import { HolidayViewComponent } from './components/holiday-view/holiday-view.component';
import { HolidayFindComponent } from './components/holiday-find/holiday-find.component';
import { HolidayEditComponent } from './components/holiday-edit/holiday-edit.component';
import { HolidayDeleteComponent } from './components/holiday-delete/holiday-delete.component';


import { HolidayNewDatepickerComponent } from './components/holiday-new/holiday-new-datepicker/holiday-new-datepicker.component';

@NgModule({
  declarations: [HolidayComponent, HolidayListComponent, HolidayListHeaderComponent, HolidayListExportComponent, HolidayListFilterComponent, HolidayNewComponent, HolidayViewComponent, HolidayFindComponent, HolidayEditComponent, HolidayDeleteComponent, HolidayNewDatepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    AngularMyDatePickerModule,
    HolidayRoutingModule
  ],
  providers: [Ng2SearchPipe],
})
export class HolidayModule { }
