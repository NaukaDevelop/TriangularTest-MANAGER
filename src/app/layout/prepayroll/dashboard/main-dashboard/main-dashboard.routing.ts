import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainDashboardComponent } from './main-dashboard.component'

const routes: Routes = [

  { path: '', redirectTo: "main-dashboard", pathMatch: 'full' },

  { path: "main-dashboard", component: MainDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDashboardRoutingModule { }
