import {Action} from '@ngrx/store';
import {Contact} from '../contact';
import {ActivatedRoute} from '@angular/router';

export const SEARCH = '[Contact] Search';
export const DELETE = '[Contact] Delete';
export const SAVE = '[Contact] Save';
export const SEARCH_COMPLETE = '[Contact] Search complete';
export const DELETE_COMPLETE = '[Contact] Delete complete';
export const SAVE_COMPLETE = '[Contact] Save complete';
export const DELETE_FAILED = '[Contact] Delete failed';
export const SAVE_FAILED = '[Contact] Save failed';

// TODO: add a new 'PageChangeAction'

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload = '') {
  }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Contact[]) {
  }
}

export class DeleteAction implements Action {
  readonly type = DELETE;

  constructor(public payload: string) {
  }
}

export class DeleteCompleteAction implements Action {
  readonly type = DELETE_COMPLETE;

  constructor(public payload: string) {
  }
}

export class DeleteFailedAction implements Action {
  readonly type = DELETE_FAILED;
}

export class SaveAction implements Action {
  readonly type = SAVE;

  constructor(public payload: {contact: Contact, url: ActivatedRoute}) {
  }
}

export class SaveCompleteAction implements Action {
  readonly type = SAVE_COMPLETE;

  constructor(public payload: Contact) {
  }
}

export class SaveFailedAction implements Action {
  readonly type = SAVE_FAILED;
}

export type Actions =
  SearchAction
  | SearchCompleteAction
  | SaveAction
  | SaveCompleteAction
  | SaveFailedAction
  | DeleteAction
  | DeleteCompleteAction
  | DeleteFailedAction;
