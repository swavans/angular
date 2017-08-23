import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Contact} from '../../contact';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute} from '@angular/router';

import * as fromRoot from '../../reducers';
import * as contacts from '../../actions';
import {Store} from '@ngrx/store';

@Component({
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {

  filter$: Observable<string>;
  pageSize$: Observable<number>;
  collectionSize$: Observable<number>;
  contacts$: Observable<Contact[]>;
  // ex-start
  page$: Observable<number>;
  // ex-end

  constructor(private store: Store<fromRoot.State>,
              private router: Router,
              private route: ActivatedRoute) {
    // TODO: get paginated contacts and page number from the store
    this.contacts$ = this.store.select(fromRoot.getContacts);
    this.collectionSize$ = this.store.select(fromRoot.getCollectionSize);
    this.filter$ = this.store.select(fromRoot.getFilter);
    this.pageSize$ = this.store.select(fromRoot.getPageSize);
    // ex-start
    this.contacts$ = this.store.select(fromRoot.getPaginatedContacts);
    this.page$ = this.store.select(fromRoot.getPage);
    // ex-end
  }

  onEdit(id: string) {
    this.router.navigate(['../edit', id], {relativeTo: this.route});
  }

  onRemove(id: string) {
    this.store.dispatch(new contacts.DeleteAction(id));
  }

  onPageChange(page: number) {
    // TODO: implement function
    // ex-start
    this.store.dispatch(new contacts.PageChangeAction(page));
    // ex-end
  }

  onFilter(text: string) {
    this.store.dispatch(new contacts.SearchAction(text));
  }
}
