import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddStore, GetStore, UpdateStore, DeleteStore } from './store.actions';

// Vendor
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { StoreListModel } from 'src/shared/models/';
import { StoreService } from 'src/shared/services';



export class StoreStateModel {
  public store: StoreListModel[];
  public selectedStore: StoreListModel;
}

@State<StoreStateModel>({
  name: 'store',
  defaults: {
    store: [],
    selectedStore: null,
  },
})
@Injectable()
export class StoreState {
  constructor(private readonly storeService: StoreService) { }

  @Selector()
  public static getStoreList({ store }: StoreStateModel): StoreListModel[] {
    return store;
  }

  @Selector()
  public static getSelectedStore({ selectedStore }): StoreListModel {
    return selectedStore;
  }

  @Action(AddStore)
  addStore(
    { getState, patchState }: StateContext<StoreStateModel>,
    { payload }: AddStore
  ): Observable<StoreListModel> {
    return this.storeService.addStore(payload).pipe(
      tap((store: StoreListModel) => {
        const state = getState();
        patchState({
          // store: [...state.store, store],
          store: [...state.store],
        });
      })
    );
  }

  @Action(GetStore)
  getStore({
    getState,
    setState,
  }: StateContext<StoreStateModel>): Observable<StoreListModel[]> {
    return this.storeService.getStoreList().pipe(
      tap((store: StoreListModel[]) => {
        const state = getState();
        setState({ ...state, store });
      })
    );
  }

  @Action(UpdateStore)
  updateStore(
    { getState, setState }: StateContext<StoreStateModel>,
    { payload }: UpdateStore
  ): Observable<StoreListModel[]> {
    return this.storeService.updateStore(payload).pipe(
      tap((store: StoreListModel[]) => {
        const state = getState();
        setState({ ...state, store });
      })
    );
  }

  @Action(DeleteStore)
  deleteStore(
    { getState, patchState }: StateContext<StoreStateModel>,
    { id }: DeleteStore
  ): Observable<StoreListModel[]> {
    return this.storeService.deleteStore(id).pipe(
      tap((store: StoreListModel[]) => {
        const state = getState();
        patchState({ ...state.store, store });
      })
    );
  }
}
