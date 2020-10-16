import { Book } from '../model';

export class AddBook {
  static readonly type = '[Book] Add';
  constructor(public payload: Book) {
  }
}
export class ListBook {
  static readonly type = '[Book] Get';
}
export class UpdateBook {
  static readonly type = '[Book] Update';
  constructor(public payload: Book) { }
}
export class DeleteBook {
  static readonly type = '[Book] Delete';
  constructor(public id: number) { }
}
