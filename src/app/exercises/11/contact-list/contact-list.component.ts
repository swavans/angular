import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {FormControl} from '@angular/forms';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {

  page = 1;
  pageSize = 5;
  term = new FormControl();

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    // TODO: use the this.term.valueChanges observable to add filtering and debounce as described in readme
    this.term.valueChanges
      .startWith('')
      .subscribe(text => this.fetchContacts(text));
  }

  onRemove(contact: Contact) {
    // TODO: implement method
  }

  private fetchContacts(filter: string) {
    this.contactService.getContacts(filter)
      .then(contacts => this.contacts = contacts);
  }
}
