import {Contact} from '../contact';
import * as contact from '../actions';

// TODO: add 'page' number to the state
export interface State {
  contacts: Contact[];
  pageSize: number;
  filter: string;
  // ex-start
  page: number;
  // ex-end
}

export const initialState: State = {
  contacts: [],
  // ex-start
  page: 1,
  // ex-end
  pageSize: 5,
  filter: ''
};

// TODO: handle the 'PAGE_CHANGE' action in the reducer
export function reducer(state = initialState, action: contact.Actions): State {
  switch (action.type) {

    case contact.SEARCH: {
      return {...state, filter: action.payload};
    }
    // ex-start
    case contact.PAGE_CHANGE: {
      return {...state, page: action.payload};
    }
    // ex-end

    case contact.SAVE_COMPLETE: {
      const savedContact = action.payload;
      const index = state.contacts.findIndex(contact => contact.id === savedContact.id);
      const newContacts = [...state.contacts];
      if (index === -1) {
        newContacts.push(savedContact);
      } else {
        newContacts[index] = savedContact;
      }

      return {...state, contacts: newContacts};
    }

    case contact.SEARCH_COMPLETE: {
      return {...state, contacts: action.payload};
    }

    case contact.DELETE_COMPLETE: {
      const filtered = state.contacts.filter(contact => contact.id !== action.payload);
      return {...state, contacts: [...filtered]};
    }

    default: {
      return state;
    }
  }
}

// Selectors
// TODO: add the 'getPage' selector
export const getContacts = (state: State) => state.contacts;
export const getFilter = (state: State) => state.filter;
export const getPageSize = (state: State) => state.pageSize;
// ex-start
export const getPage = (state: State) => state.page;
// ex-end
