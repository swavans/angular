// console.log all actions
import {ActionReducer} from '@ngrx/store';
import {State} from './index';
import {environment} from '../../../../environments/environment';

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: ActionReducer<any, any>[] = !environment.production
  ? [logger]
  : [];
