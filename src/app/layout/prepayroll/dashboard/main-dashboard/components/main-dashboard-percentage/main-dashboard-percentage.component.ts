import { Component, OnInit } from '@angular/core';

import { MainDashboardObject } from './../../models/main-dashboard.model';
import { MainDashboardService } from './../../main-dashboard.service';

@Component({
  selector: 'app-main-dashboard-percentage',
  templateUrl: './main-dashboard-percentage.component.html',
  styleUrls: ['./main-dashboard-percentage.component.scss']
})
export class MainDashboardPercentageComponent implements OnInit {

  mainDashboardLocal: MainDashboardObject

  constructor(private mainDashboardService: MainDashboardService) {
    this.mainDashboardService.mainDashboardState.subscribe(data => {
      this.mainDashboardLocal = data
    })
  }

  ngOnInit(): void {
  }

}
