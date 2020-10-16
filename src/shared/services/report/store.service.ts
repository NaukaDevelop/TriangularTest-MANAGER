// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Vendor
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// Models

import { StoreModel } from 'src/shared/models';

// Services
import { EnvService } from 'src/shared/environment/';



@Injectable({
  providedIn: 'root',
})
export class StoreService {


  constructor(
    private http: HttpClient,
    private env: EnvService,
    private router: Router
  ) { }


  private stores: Array<StoreModel> = [
    { storeId: 1, storeName: 'Clean Code' },
    { storeId: 2, storeName: 'Clean Architecture' },
    { storeId: 3, storeName: 'The Clean Coder' },
    { storeId: 4, storeName: 'JavaScript Functional programming' },
    { storeId: 5, storeName: 'Eloquent JavaScript' },
  ];
  // Inmutable
  // Methods

  getStoreList(): Observable<StoreModel[]> {
    // Define api url
    const apiString = `${this.env.apiUrl}/api/reports/tiendas`;
    // Get backend info
    return this.http
      .get<StoreModel[]>(apiString, { responseType: 'json' })
      .pipe(map((data) => data));
  }

  // Crud

  addStore(store: StoreModel): Observable<StoreModel> {
    this.stores.push(store);
    return of(store);
  }

  getStores(): Observable<StoreModel[]> {
    return of(this.stores);
  }

  updateStore(store: StoreModel): Observable<StoreModel[]> {
    const { storeId } = store;
    this.stores = this.stores.filter((item) => item.storeId !== storeId);
    this.stores.push(store);
    console.log(this.stores);
    return of(this.stores);
  }

  deleteStore(id: number | string): Observable<StoreModel[]> {
    this.stores = this.stores.filter((item) => item.storeId !== id);
    return of(this.stores);
  }

}
