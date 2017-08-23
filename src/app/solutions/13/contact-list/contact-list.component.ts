import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {FormControl} from '@angular/forms';
import {ContactService} from '../contact.service';
import {ActivatedRoute} from '@angular/router';

import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {

  page = 1;
  pageSize = 5;
  term = new FormControl();

  contacts: Contact[] = [];

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              public authService: AuthService) {
  }

  ngOnInit() {
    this.contacts = this.route.snapshot.data['contacts'];

    this.term.valueChanges
      .filter(text => text === '' || text.length > 1)
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(text => this.fetchContacts(text));
  }

  onRemove(contact: Contact) {
    this.contactService.remove(contact.id)
      .then(() => this.fetchContacts(''));
  }

  private fetchContacts(filter: string): Promise<Contact[]> {
    return this.contactService.getContacts(filter)
      .then(contacts => this.contacts = contacts);
  }
}
