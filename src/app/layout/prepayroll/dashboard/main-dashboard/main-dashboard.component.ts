import { Component, OnInit } from '@angular/core';

import { MainDashboardService } from './main-dashboard.service';
import { MainDashboardObject, StoreModel } from './models/main-dashboard.model';



interface StorePercentageModel {
  calculated: number;
  withoutCalculating: number;
  accepted: number;
  withoutAccepting: number
}

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})

export class MainDashboardComponent implements OnInit {

  // storeItems: Array<StoreModel>
  // storePercentage: StorePercentageModel

  mainDashboardLocal: MainDashboardObject

  constructor(private mainDashboardService: MainDashboardService) {
    this.mainDashboardService.mainDashboardState.subscribe(data => {
      this.mainDashboardLocal = data
    })
  }

  ngOnInit(): void {
    this.onLoadData()
    this.mainDashboardService.changeMainDashboardObject(this.mainDashboardLocal)

  }


  onLoadData() {
    this.mainDashboardLocal.mainDashboardStoreArray = [
      { storeId: "1", storeName: "Farmatodo", storeColor: "red" },
      { storeId: "2", storeName: "Traki", storeColor: "orange" },
      { storeId: "3", storeName: "Beko", storeColor: "green" },
      { storeId: "4", storeName: "Nike", storeColor: "red" },
      { storeId: "5", storeName: "Furla", storeColor: "red" },
      { storeId: "6", storeName: "Aeropostale", storeColor: "green" },
      { storeId: "7", storeName: "Gathmann", storeColor: "green" },
      { storeId: "8", storeName: "Brooks Brothers", storeColor: "green" },
      { storeId: "9", storeName: "Adidas", storeColor: "red" },
      { storeId: "10", storeName: "Skechers", storeColor: "orange" }
    ];

    this.mainDashboardLocal.mainDashboardCalculatedPtg = 0.7143;
    this.mainDashboardLocal.mainDashboardUncalculatedPtg = 0.2857;
    this.mainDashboardLocal.mainDashboardAcceptedPtg = 0.6939;
    this.mainDashboardLocal.mainDashboardPendingPtg = 0.6939;

    this.mainDashboardLocal.mainDashboardStoreQty = 98;

    this.mainDashboardLocal.mainDashboardCalculatedQty = 68;
    this.mainDashboardLocal.mainDashboardUncalculatedQty = 30;
    this.mainDashboardLocal.mainDashboardAcceptedQty = 66;
    this.mainDashboardLocal.mainDashboardPendingQty = 2;
  }

}
