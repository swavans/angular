import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Injectable} from '@angular/core';

import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import * as contact from '../actions';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';
import {Router} from '@angular/router';

@Injectable()
export class ContactEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(contact.SEARCH)
    .map(toPayload)
    .switchMap(term => {
      return this.service
        .getContacts(term)
        .map((contacts: Contact[]) => new contact.SearchCompleteAction(contacts))
        .catch(() => of(new contact.SearchCompleteAction([])));
    });

  @Effect()
  delete$: Observable<Action> = this.actions$
    .ofType(contact.DELETE)
    .map(toPayload)
    .switchMap(id => {
      return this.service
        .remove(id)
        .map(() => new contact.DeleteCompleteAction(id))
        .catch(() => of(new contact.DeleteFailedAction()));
    });

  @Effect()
  save$: Observable<Action> = this.actions$
    .ofType(contact.SAVE)
    .map(toPayload)
    .switchMap((data: {contact, url}) => {
      return this.service
        .save(data.contact)
        .map((saved) => new contact.SaveCompleteAction(saved))
        .catch(() => of(new contact.SaveFailedAction()))
        .do(() => this.router.navigate(['list'], {relativeTo: data.url}));
    });

  constructor(private actions$: Actions,
              private service: ContactService,
              private router: Router) {
  }
}
