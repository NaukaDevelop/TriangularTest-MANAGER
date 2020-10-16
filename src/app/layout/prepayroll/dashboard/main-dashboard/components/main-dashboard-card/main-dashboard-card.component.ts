import { Component, Input, OnInit } from '@angular/core';

interface StoreModel {
  storeId: string;
  storeName: string;
  storeColor: string;
}

@Component({
  selector: 'app-main-dashboard-card',
  templateUrl: './main-dashboard-card.component.html',
  styleUrls: ['./main-dashboard-card.component.scss']
})
export class MainDashboardCardComponent implements OnInit {

  @Input() store: StoreModel[]

  constructor() {
   }

  ngOnInit(): void {
  }

}
