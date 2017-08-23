import {Contact} from './contact';
import {CONTACTS} from './contacts';

// TODO: finish implementing the service and make it available for injection
// ex-start
import {Injectable} from '@angular/core';

@Injectable()
// ex-end
export class ContactService {

  private contacts: Contact[] = Array.from(CONTACTS);
  // ex-start
  private counter = CONTACTS.length + 1;
  // ex-end

  getContacts() {
    return this.contacts;
  }

  save(contact: Contact) {
    // ex-start
    if (contact.id) {
      const index = this.contacts.findIndex(item => item.id === contact.id);
      this.contacts[index] = contact;
    } else {
      contact.id = this.counter++;
      this.contacts.push(contact);
    }
    // ex-end
  }

  remove(id: number) {
    // ex-start
    this.contacts = this.contacts.filter(index => index.id !== id);
    // ex-end
  }
}
