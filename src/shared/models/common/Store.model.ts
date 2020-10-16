export class StoreModel {
  'storeId': string | number;
  'storeNbr'?: number;
  'storeName': string;
  'storeType'?: string;
  'storeAddress1'?: string;
  'storeCity'?: string;
  'storeState'?: string;
  'storeArea'?: string;
  'storeZip'?: string;
  'storeCountry'?: string;
  'storeCounty'?: string;
  'storeLocale'?: string;
  'storeCurrencyId'?: string;
  'storeLatitud'?: number;
  'storeLongitud'?: number;
  'storePhone'?: string;
  'storeDescription'?: string;
  'storeManager'?: string;
  'storeEmail'?: string;
  'storeTax'?: number;
  'storeLocType'?: string;
  'storeChk'?: number;
  'storeSts'?: string;
  'storeCreateDate'?: string;
  'storeUpdateDate'?: string;
}

export interface StoreListModel {
  'storeId': string | number;
  'storeName': string;
  'storeType'?: string;
}
