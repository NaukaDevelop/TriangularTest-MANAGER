
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayComponent } from './holiday.component';

import { HolidayEditComponent } from './components/holiday-edit/holiday-edit.component';
import { HolidayFindComponent } from './components/holiday-find/holiday-find.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { HolidayNewComponent } from './components/holiday-new/holiday-new.component';
import { HolidayViewComponent } from './components/holiday-view/holiday-view.component';



const routes: Routes = [
  { path: "", redirectTo: "holiday-list", pathMatch: "full" },

  {
    path: "holiday", component: HolidayComponent, children: [
      { path: "holiday-list", component: HolidayListComponent },


      { path: "holiday-edit", component: HolidayEditComponent },
      { path: "holiday-find", component: HolidayFindComponent },
      { path: "holiday-view", component: HolidayViewComponent },
      { path: "holiday-new", component: HolidayNewComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRoutingModule { }
