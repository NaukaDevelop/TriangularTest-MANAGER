import { Component, OnInit } from '@angular/core';

import { MainDashboardObject } from './../../models/main-dashboard.model';
import { MainDashboardService } from './../../main-dashboard.service';

@Component({
  selector: 'app-main-dashboard-total',
  templateUrl: './main-dashboard-total.component.html',
  styleUrls: ['./main-dashboard-total.component.scss']
})
export class MainDashboardTotalComponent implements OnInit {

  mainDashboardLocal: MainDashboardObject

  constructor(private mainDashboardService: MainDashboardService) {
    this.mainDashboardService.mainDashboardState.subscribe(data => {
      this.mainDashboardLocal = data
    })
  }

  ngOnInit(): void {
  }
}
