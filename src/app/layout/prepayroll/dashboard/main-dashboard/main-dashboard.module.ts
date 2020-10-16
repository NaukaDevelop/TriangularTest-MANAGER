import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard.routing';
import { MainDashboardComponent } from './main-dashboard.component';
import { MainDashboardCardComponent } from './components/main-dashboard-card/main-dashboard-card.component';
import { MainDashboardTotalComponent } from './components/main-dashboard-total/main-dashboard-total.component';
import { MainDashboardPercentageComponent } from './components/main-dashboard-percentage/main-dashboard-percentage.component';


@NgModule({
  declarations: [MainDashboardComponent, MainDashboardCardComponent, MainDashboardTotalComponent, MainDashboardPercentageComponent],
  imports: [
    CommonModule,
    MainDashboardRoutingModule
  ]
})
export class MainDashboardModule { }
