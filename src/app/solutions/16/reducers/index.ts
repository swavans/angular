import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromContacts from './contacts';
import {paginate} from './utils';

export interface State {
  contacts: fromContacts.State;
}

export const reducers: ActionReducerMap<State> = {
  contacts: fromContacts.reducer
};

// Selectors
// TODO: add the 'getPage' and 'getPaginatedContacts' selectors
const getContactState = createFeatureSelector<fromContacts.State>('contacts');

export const getContacts = createSelector(
  getContactState,
  fromContacts.getContacts
);

export const getFilter = createSelector(
  getContactState,
  fromContacts.getFilter
);

export const getCollectionSize = createSelector(
  getContacts,
  contacts => contacts.length
);

export const getPageSize = createSelector(
  getContactState,
  fromContacts.getPageSize
);
// ex-start
export const getPage = createSelector(
  getContactState,
  fromContacts.getPage
);

export const getPaginatedContacts = createSelector(
  getContacts,
  getPage,
  getPageSize,
  (contacts, page, pageSize) => paginate(contacts, page, pageSize)
);
// ex-end
