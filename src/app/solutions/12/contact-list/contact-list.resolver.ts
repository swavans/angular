import {Resolve} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../contact.service';
// ex-start
import {Injectable} from '@angular/core';
// ex-end

// TODO: finish implementing the resolver

// ex-start
@Injectable()
export class ContactListResolver implements Resolve<Contact[]> {

  constructor(private contactService: ContactService) {}

  resolve() {
    return this.contactService.getContacts();
  }
}
// ex-end
