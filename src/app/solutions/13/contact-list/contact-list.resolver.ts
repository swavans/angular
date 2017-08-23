import {Resolve} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../contact.service';

import {Injectable} from '@angular/core';

@Injectable()
export class ContactListResolver implements Resolve<Contact[]> {

  constructor(private contactService: ContactService) {}

  resolve() {
    return this.contactService.getContacts();
  }
}
