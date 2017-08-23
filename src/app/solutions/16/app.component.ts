import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './reducers';
import {SearchAction} from './actions/index';

@Component({
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(store: Store<State>) {
    store.dispatch(new SearchAction());
  }
}
