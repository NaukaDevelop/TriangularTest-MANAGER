export class StoreModel {
  storeId: string;
  storeName: string;
  storeColor: string;
}

export class MainDashboardObject {
  mainDashboardStoreQty: number;

  mainDashboardCalculatedQty: number;
  mainDashboardUncalculatedQty: number;
  mainDashboardAcceptedQty: number;
  mainDashboardPendingQty: number;

  mainDashboardAcceptedPtg: number;
  mainDashboardPendingPtg: number;
  mainDashboardCalculatedPtg: number;
  mainDashboardUncalculatedPtg: number;

  mainDashboardStoreArray: Array<StoreModel>;
}
