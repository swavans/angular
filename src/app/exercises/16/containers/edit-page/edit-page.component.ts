import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {Contact} from '../../contact';

import * as fromRoot from '../../reducers';
import * as contacts from '../../actions';
import {Store} from '@ngrx/store';

@Component({
  templateUrl: './edit-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPageComponent implements OnInit {

  contact$: Observable<Contact>;
  contactId$: Observable<string>;

  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.contact$ = this.route.data.map(data => data.contact);
    this.contactId$ = this.contact$.map(contact => contact ? contact.id : null);
  }

  onSave(contact: Contact) {
    const url = this.route.parent;
    this.store.dispatch(new contacts.SaveAction({contact, url}));
  }

  goBack() {
    this.router.navigate(['list'], {relativeTo: this.route.parent});
  }
}
