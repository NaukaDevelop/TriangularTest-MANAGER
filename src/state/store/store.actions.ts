import { StoreListModel } from 'src/shared/models'

export class AddStore {
  static readonly type = '[Store] Add';
  constructor(public payload: StoreListModel) { }
}

export class GetStore {
  static readonly type = '[Store] Get';
}

export class UpdateStore {
  static readonly type = '[Store] Update';
  constructor(public payload: StoreListModel) { }
}

export class DeleteStore {
  static readonly type = '[Store] Delete';
  constructor(public id: string) { }
}
